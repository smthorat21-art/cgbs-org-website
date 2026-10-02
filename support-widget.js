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
      font-family: Arial, sans-serif;
    }

    .cgbs-support-toggle {
      border: 0;
      border-radius: 28px;
      padding: 12px 16px;
      background: #16834a;
      color: #fff;
      font-weight: 700;
      font-size: 14px;
      box-shadow: 0 4px 14px rgba(0,0,0,.22);
      cursor: pointer;
    }

    .cgbs-support-menu {
      display: none;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 9px;
    }

    .cgbs-support-widget.open .cgbs-support-menu {
      display: flex;
    }

    .cgbs-support-menu a {
      display: flex;
      align-items: center;
      gap: 9px;
      text-decoration: none;
      border-radius: 24px;
      padding: 11px 15px;
      background: #fff;
      color: #174b35;
      font-weight: 700;
      font-size: 14px;
      box-shadow: 0 3px 12px rgba(0,0,0,.18);
      white-space: nowrap;
    }

    @media (max-width:480px) {
      .cgbs-support-widget {
        right: 10px;
        bottom: 12px;
      }

      .cgbs-support-toggle {
        padding: 11px 14px;
        font-size: 13px;
      }

      .cgbs-support-menu a {
        font-size: 13px;
        padding: 10px 13px;
      }
    }
  `;

  document.head.appendChild(style);

  const widget = document.createElement("div");
  widget.className = "cgbs-support-widget";

  widget.innerHTML = `
    <div class="cgbs-support-menu">

      <a href="https://wa.me/${WHATSAPP_NUMBER}"
         target="_blank"
         rel="noopener">
        🟢 WhatsApp Support
      </a>

      <a href="${CHAT_PAGE}">
        💬 Chat / Support Request
      </a>

      <a href="${DONATE_PAGE}">
        💚 Donate / Support
      </a>

    </div>

    <button class="cgbs-support-toggle" type="button">
      💬 Support
    </button>
  `;

  document.body.appendChild(widget);

  const button = widget.querySelector(".cgbs-support-toggle");

  button.addEventListener("click", function () {
    widget.classList.toggle("open");

    button.textContent =
      widget.classList.contains("open")
        ? "✕ Close"
        : "💬 Support";
  });

})();
