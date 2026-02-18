import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import logo from '../assates/logo.jpeg';
import '../QuotationForm/QuotationForm.css';

export default function QuotationForm() {
  const pdfRef = useRef();

  const [form, setForm] = useState({
    customerName: '',
    phone: '',
    address: '',
    estimateNo: '',
    date: '',
    items: Array.from({ length: 14 }, () => ({
      name: '',
      qty: '',
      unit: '',
      price: '',
      amount: ''
    })),
    notes: '',
    subtotal: '',
    gst: '',
    total: '',
    guarantor1: '',
    guarantor2: '',
    signature: null,
  });

  /* ---------------- VALIDATION HELPERS ---------------- */

  const allowOnlyText = (value) => /^[A-Za-z\s]*$/.test(value);
  const allowOnlyPhone = (value) => /^[0-9]{0,10}$/.test(value);
  const allowOnlyNumber = (value) => /^[0-9]*\.?[0-9]*$/.test(value);
  const allowAlphaNumeric = (value) => /^[A-Za-z0-9-]*$/.test(value);

  /* ---------------- AUTO CALCULATE ---------------- */

  useEffect(() => {
    const subtotal = form.items.reduce((sum, item) => {
      const qty = parseFloat(item.qty) || 0;
      const price = parseFloat(item.price) || 0;
      return sum + qty * price;
    }, 0);

    const gst = +(subtotal * 0.18).toFixed(2);
    const total = +(subtotal + gst).toFixed(2);

    setForm(prev => ({
      ...prev,
      subtotal: subtotal.toFixed(2),
      gst: gst.toFixed(2),
      total: total.toFixed(2)
    }));
  }, [form.items]);

  /* ---------------- UPDATE ITEM ---------------- */

  const updateItem = (index, field, value) => {
    if (field === 'qty' || field === 'price') {
      if (!allowOnlyNumber(value)) return;
    }

    const updatedItems = [...form.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };

    const qty = parseFloat(updatedItems[index].qty) || 0;
    const price = parseFloat(updatedItems[index].price) || 0;
    updatedItems[index].amount = (qty * price).toFixed(2);

    setForm({ ...form, items: updatedItems });
  };

  /* ---------------- SIGNATURE ---------------- */

  const handleSignatureUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm(prev => ({ ...prev, signature: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  /* ---------------- DOWNLOAD PDF ---------------- */

  const handleDownload = async () => {
    const fileInput = document.querySelector('.file-upload');
    if (fileInput) fileInput.classList.add('hide-in-pdf');

    const originalWidth = pdfRef.current.style.width;
    const originalZoom = document.body.style.zoom;

    pdfRef.current.style.width = '1120px';
    document.body.style.zoom = '1';

    await new Promise(resolve => setTimeout(resolve, 300));

    const canvas = await html2canvas(pdfRef.current, {
      scale: 3,
      useCORS: true
    });

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jsPDF('p', 'pt', 'a4');

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'jpeg', 0, 0, pdfWidth, pdfHeight);
    pdf.save('quotation.pdf');

    pdfRef.current.style.width = originalWidth;
    document.body.style.zoom = originalZoom;
    if (fileInput) fileInput.classList.remove('hide-in-pdf');
  };

  return (
    <div className="quotation">
      <div className="quotation__content" ref={pdfRef}>

        <header className="quotation__header">
          <div className="quotation__company-info">
            <h2 className='quotation--price'>PRICE OFFER/QUOTATION</h2>
            <h2>MAA BHAWANI TENT HOUSE</h2>
            <p>Nawalpur Chauraha, Salempur, Deoria</p>
            <p>Uttar Pradesh - 274509</p>
            <p>Phone: 7783925991</p>
            <p>Email: maabhawanitenthouse5@gmail.com</p>
            <p>GSTIN: 09GUUPK2166P1ZI</p>
          </div>
          <img src={logo} alt="Company Logo" className="quotation__logo" />
        </header>

        <section className="quotation__meta">
          <div>
            <p>
              <strong>Customer Name:</strong>
              <input
                value={form.customerName}
                onChange={e => {
                  if (allowOnlyText(e.target.value))
                    setForm({ ...form, customerName: e.target.value });
                }}
              />
            </p>

            <p>
              <strong>Phone:</strong>
              <input
                value={form.phone}
                maxLength={10}
                onChange={e => {
                  if (allowOnlyPhone(e.target.value))
                    setForm({ ...form, phone: e.target.value });
                }}
              />
            </p>

            <p>
              <strong>Address:</strong>
              <input
                value={form.address}
                onChange={e =>
                  setForm({ ...form, address: e.target.value })
                }
              />
            </p>
          </div>

          <div>
            <p>
              <strong>Estimate No:</strong>
              <input
                value={form.estimateNo}
                onChange={e => {
                  if (allowAlphaNumeric(e.target.value))
                    setForm({ ...form, estimateNo: e.target.value });
                }}
              />
            </p>

            <p>
              <strong>Date:</strong>
              <input
                type="date"
                value={form.date}
                onChange={e =>
                  setForm({ ...form, date: e.target.value })
                }
              />
            </p>
          </div>
        </section>

        <p className="quotation__intro">
          Dear Sir,<br />
          We thank & appreciate your interest & belief in our services.<br />
          We are pleased to offer our best price for the same. We hope you find it most competitive & suitable.
        </p>

        <table className="quotation__table">
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Price/Unit<br />(without tax)</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {form.items.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>

                <td>
                  <input
                    value={item.name}
                    onChange={e =>
                      updateItem(idx, 'name', e.target.value)
                    }
                  />
                </td>

                <td>
                  <input
                    value={item.qty}
                    onChange={e =>
                      updateItem(idx, 'qty', e.target.value)
                    }
                  />
                </td>

                <td>
                  <input
                    value={item.unit}
                    onChange={e =>
                      updateItem(idx, 'unit', e.target.value)
                    }
                  />
                </td>

                <td>
                  <input
                    value={item.price}
                    onChange={e =>
                      updateItem(idx, 'price', e.target.value)
                    }
                  />
                </td>

                <td>
                  <input value={item.amount} readOnly />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="quotation__notes">
          Words: <input value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
        </div>

        <div className="quotation__footer">
          <div className="quotation__terms">
            <h4>Terms & Conditions:</h4>
            <ol>
              <li>Damage/loss to be compensated as per fixed rate.</li>
              <li>Customer must arrange/pay for transportation.</li>
              <li>Advance non-refundable upon cancellation.</li>
              <li>Full payment required before delivery.</li>
              <li>No liability for natural disasters/accidents.</li>
              <li>Jurisdiction: Deoria court.</li>
              <li>Firm may change rules anytime.</li>
              <li>Guarantor required for all work.</li>
            </ol>
          </div>
          <div className="quotation__summary">
            <p>Sub Total: <input value={form.subtotal} readOnly /></p>
            <p>18% GST: <input value={form.gst} readOnly /></p>
            <p><strong>Final Amount:</strong> <input value={form.total} readOnly /></p>
          </div>
        </div>

        <div className="quotation__signatures">
          <div>
            <label>Guarantor 1:</label>
            <input
              type="text"
              value={form.guarantor1}
              onChange={e => {
                if (allowOnlyText(e.target.value))
                  setForm({ ...form, guarantor1: e.target.value });
              }}
            />
          </div>

          <div>
            <label>Guarantor 2:</label>
            <input
              type="text"
              value={form.guarantor2}
              onChange={e => {
                if (allowOnlyText(e.target.value))
                  setForm({ ...form, guarantor2: e.target.value });
              }}
            />
          </div>

          <div>
            <label>Signature:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleSignatureUpload}
              className="file-upload"
            />
            {form.signature && (
              <img
                src={form.signature}
                alt="Signature"
                style={{ maxHeight: "80px", marginTop: "10px" }}
              />
            )}
          </div>
        </div>

        <p className="quotation__footer-note">
          We trust you will find our offer in line with your requirement. Thanking you and assuring our best services at all times.
        </p>
      </div>

      <div className="quotation__actions">
        <button onClick={handleDownload}>Download PDF</button>
      </div>
    </div>
  );
}
