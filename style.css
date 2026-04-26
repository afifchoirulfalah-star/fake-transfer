:root {
  color-scheme: light;
  --bg: #eef3f7;
  --surface: #ffffff;
  --surface-soft: #f6f9fb;
  --text: #13202b;
  --muted: #657385;
  --line: #dce5ec;
  --teal: #0f766e;
  --teal-dark: #0b5d56;
  --green: #16a34a;
  --amber: #b45309;
  --shadow: 0 18px 45px rgba(21, 35, 48, 0.18);
}

* {
  box-sizing: border-box;
}

html {
  min-height: 100%;
  background: var(--bg);
}

body {
  min-height: 100vh;
  min-height: 100svh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--text);
  background:
    linear-gradient(145deg, rgba(15, 118, 110, 0.16), rgba(22, 163, 74, 0.08) 42%, rgba(180, 83, 9, 0.08)),
    var(--bg);
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: 18px;
}

.phone {
  width: min(100%, 430px);
  min-height: min(780px, calc(100svh - 36px));
  overflow: hidden;
  background: var(--surface-soft);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.hidden {
  display: none !important;
}

.header {
  color: #ffffff;
  padding: calc(12px + env(safe-area-inset-top)) 18px 24px;
  background:
    linear-gradient(135deg, rgba(15, 118, 110, 0.96), rgba(11, 93, 86, 0.98)),
    #0f766e;
}

.statusbar,
.top-row,
.section-title,
.receipt-header,
.detail-row,
.history-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.statusbar {
  min-height: 18px;
  margin-bottom: 18px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.82);
}

.top-row h1,
.receipt-header h1,
.section-title h2,
.success-card h2 {
  margin: 0;
  letter-spacing: 0;
}

.top-row h1 {
  font-size: 28px;
  line-height: 1.1;
}

.eyebrow,
.muted,
.account-mask,
.section-title span,
.popup-box small {
  color: var(--muted);
}

.eyebrow {
  margin: 0 0 5px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
}

.avatar {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.28);
  font-weight: 700;
}

.content {
  padding: 16px;
}

.card {
  position: relative;
  margin-bottom: 14px;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface);
}

.balance-card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  margin-top: -34px;
  box-shadow: 0 10px 28px rgba(14, 80, 75, 0.12);
}

.balance-card h2 {
  margin: 5px 0 6px;
  font-size: clamp(24px, 7vw, 32px);
  line-height: 1.15;
}

.muted {
  margin: 0;
  font-size: 13px;
}

.account-mask {
  display: block;
  font-size: 12px;
}

.sim-badge,
.mini-badge {
  flex: 0 0 auto;
  border-radius: 999px;
  border: 1px solid rgba(180, 83, 9, 0.24);
  background: #fff7ed;
  color: var(--amber);
  font-size: 11px;
  font-weight: 700;
}

.sim-badge {
  padding: 6px 8px;
}

.mini-badge {
  padding: 5px 7px;
}

.section-title {
  margin-bottom: 12px;
}

.section-title h2 {
  font-size: 18px;
}

.section-title span {
  font-size: 12px;
}

.notice {
  margin-bottom: 14px;
  padding: 10px 12px;
  border-radius: 8px;
  background: #fff7ed;
  color: #8a4b0f;
  font-size: 12px;
  line-height: 1.45;
}

label {
  display: block;
  margin: 12px 0 6px;
  color: #344454;
  font-size: 13px;
  font-weight: 700;
}

input,
select {
  width: 100%;
  min-height: 46px;
  padding: 11px 12px;
  border: 1px solid #cfd9e2;
  border-radius: 8px;
  outline: none;
  background: #ffffff;
  color: var(--text);
}

input::placeholder {
  color: #9aa7b5;
}

input:focus,
select:focus {
  border-color: var(--teal);
  box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.14);
}

button {
  width: 100%;
  min-height: 48px;
  margin-top: 18px;
  border: 0;
  border-radius: 8px;
  background: var(--teal);
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
}

button:active {
  transform: translateY(1px);
}

.status {
  min-height: 18px;
  margin: 10px 0 0;
  color: #b42318;
  font-size: 13px;
}

.popup {
  position: fixed;
  inset: 0;
  z-index: 10;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(19, 32, 43, 0.56);
}

.popup.is-active {
  display: flex;
}

.popup-box {
  width: min(100%, 300px);
  padding: 22px;
  border-radius: 8px;
  background: #ffffff;
  color: var(--text);
  text-align: center;
  box-shadow: var(--shadow);
}

.popup-box p {
  margin: 12px 0 4px;
  font-weight: 700;
}

.spinner {
  width: 34px;
  height: 34px;
  margin: 0 auto;
  border: 3px solid #d9e4eb;
  border-top-color: var(--teal);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.receipt-screen {
  background: #f8fafc;
}

.receipt-header {
  min-height: 58px;
  padding: calc(10px + env(safe-area-inset-top)) 14px 10px;
  border-bottom: 1px solid var(--line);
  background: var(--surface);
}

.receipt-header h1 {
  font-size: 17px;
}

.icon-button {
  width: 38px;
  min-height: 38px;
  margin: 0;
  flex: 0 0 auto;
  border: 1px solid var(--line);
  background: #ffffff;
  color: var(--text);
  font-size: 24px;
  line-height: 1;
}

.success-card {
  overflow: hidden;
  text-align: center;
}

.success-card::after {
  content: "SIMULASI";
  position: absolute;
  inset: 44% auto auto 50%;
  transform: translate(-50%, -50%) rotate(-18deg);
  color: rgba(180, 83, 9, 0.08);
  font-size: 42px;
  font-weight: 800;
  pointer-events: none;
}

.success-mark {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  margin: 2px auto 12px;
  border-radius: 50%;
  background: #dcfce7;
  color: var(--green);
  font-weight: 800;
}

.success-card h2 {
  margin-top: 5px;
  font-size: 19px;
}

.amount {
  margin: 16px 0;
  font-size: clamp(27px, 8vw, 36px);
  font-weight: 800;
  line-height: 1.1;
}

.receipt-note {
  margin: 12px 0 0;
  padding: 10px;
  border-radius: 8px;
  background: #f1f5f9;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.45;
}

.details {
  margin-top: 14px;
  border-top: 1px solid var(--line);
}

.detail-row {
  padding: 11px 0;
  border-bottom: 1px solid var(--line);
  text-align: left;
}

.detail-row span {
  color: var(--muted);
  font-size: 12px;
}

.detail-row strong {
  max-width: 58%;
  overflow-wrap: anywhere;
  text-align: right;
  font-size: 13px;
}

.history-card {
  padding-bottom: 8px;
}

.history-item {
  padding: 11px 0;
  border-top: 1px solid var(--line);
}

.history-item:first-child {
  border-top: 0;
}

.history-item strong {
  font-size: 14px;
}

.history-item small {
  display: block;
  margin-top: 4px;
  color: var(--muted);
}

.secondary-button {
  margin-top: 2px;
  border: 1px solid var(--teal);
  background: #ffffff;
  color: var(--teal);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 480px) {
  .app-shell {
    min-height: 100svh;
    padding: 0;
    place-items: stretch;
  }

  .phone {
    width: 100%;
    min-height: 100svh;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }

  .content {
    padding: 14px;
  }

  .header {
    padding-left: 16px;
    padding-right: 16px;
  }

  .balance-card {
    margin-top: -28px;
  }

  .detail-row {
    gap: 10px;
  }
}

@media (max-width: 340px) {
  .balance-card,
  .detail-row {
    align-items: flex-start;
    flex-direction: column;
  }

  .detail-row strong {
    max-width: 100%;
    text-align: left;
  }

  .sim-badge {
    align-self: flex-start;
  }
}
