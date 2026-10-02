(function () {

  const WHATSAPP_NUMBER = "917276034493";
  const DONATE_PAGE = "golden-eve-donation.html";
  const CHAT_PAGE = "request-support.html";

  const style = document.createElement("style");

  style.textContent = `
    .cgbs-support-widget {
      position: fixed;
      right: 14px;
      bottom: 18px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-family: Arial, sans-serif;
    }

    .cgbs-support-widget a {
      display: flex;
      align-items: center;
      gap: 9px;
      text-decoration: none;
      border-radius: 28px;
      padding: 13px 20px;
      background: #ffffff;
      color: #174b35;
      font-weight: 700;
      font-size: 14px;
      box-shadow: 0 4px 14px rgba(0,0,0,.20);
      white-space: nowrap;
    }

    .cgbs-support-widget a:hover {
      transform: translateY(-1px);
    }

    @media (max-width:480px) {

      .cgbs-support-widget {
        right: 10px;
        bottom: 12px;
        gap: 8px;
      }

      .cgbs-support-widget a {
        padding: 11px 16px;
        font-size: 13px;
      }
    }
  `;

  document.head.appendChild(style);

  const widget = document.createElement("div");

  widget.className = "cgbs-support-widget";

  widget.innerHTML = `

    <a href="https://wa.me/${WHATSAPP_NUMBER}"
       target="_blank"
       rel="noopener">
      🟢 WhatsApp Support
    </a>

    <a href="${CHAT_PAGE}">
      🥰 Chat / Support Request
    </a>

    <a href="${DONATE_PAGE}">
      🤝 Donate / Support
    </a>

  `;

  document.body.appendChild(widget);

})();
