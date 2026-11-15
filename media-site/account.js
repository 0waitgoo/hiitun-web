(() => {
  const TOKEN_KEY = 'hiitun.account.token';
  const LANGUAGE_KEY = 'hiitun-site-language';
  const THEME_KEY = 'hiitun-site-theme';
  const root = document.documentElement;
  const loginView = document.querySelector('#account-login-view');
  const signedInView = document.querySelector('#account-signed-in');
  const loginForm = document.querySelector('#login-form');
  const setupForm = document.querySelector('#setup-form');
  const loginStatus = document.querySelector('#login-status');
  const setupStatus = document.querySelector('#setup-status');
  const logoutStatus = document.querySelector('#logout-status');
  const membershipPlan = document.querySelector('#account-membership-plan');
  const membershipDetail = document.querySelector('#account-membership-detail');
  const planGrid = document.querySelector('#account-plan-grid');
  const checkoutStatus = document.querySelector('#checkout-status');
  const checkoutLink = document.querySelector('#checkout-link');
  const refreshMembershipButton = document.querySelector('#refresh-membership');
  const cancelSubscriptionButton = document.querySelector('#cancel-subscription');
  const sendCodeButton = document.querySelector('#send-code');
  const themeButton = document.querySelector('#theme-toggle');
  const languageButton = document.querySelector('#language-toggle');
  const languageLabel = document.querySelector('.language-label');
  const themeLabel = document.querySelector('.theme-label');
  const themeIcon = document.querySelector('.utility-icon');

  const translations = {
    '跳转到主要内容': 'Skip to main content',
    '多账号运营': 'Multi-Account Operations',
    '返回官网': '← Back to website',
    'HIITUN ACCOUNT': 'HIITUN ACCOUNT',
    '登录 HIITUN': 'Log in to HIITUN',
    '设置密码': 'Set your password',
    '使用桌面软件中注册的邮箱和密码登录。': 'Sign in with the email and password you use in the desktop app.',
    '请输入邮箱验证码设置或重置密码。': 'Verify your email to set or reset your password.',
    '账号共用，工作资料保存在本机。': 'One account; work data stays on your device.',
    '草稿、素材、社媒授权与配置目前保存在桌面设备，不会因网页登录而上传或同步。': 'Drafts, assets, social authorizations, and settings stay on your desktop device. Signing in here does not upload or sync them.',
    '邮箱': 'Email',
    '输入注册邮箱': 'Enter your account email',
    '密码': 'Password',
    '输入密码': 'Enter your password',
    '登录': 'Log in',
    '登录中…': 'Signing in…',
    '正在验证…': 'Verifying…',
    '邮箱验证码': 'Email verification code',
    '6 位验证码': '6-digit code',
    '获取验证码': 'Send code',
    '设置新密码': 'New password',
    '8–72 个字符': '8–72 characters',
    '确认新密码': 'Confirm password',
    '两次输入的密码不一致': 'The passwords do not match.',
    '再次输入新密码': 'Enter your new password again',
    '首次登录请验证邮箱并设置密码；已有账号也可用此流程重置密码。': 'Verify your email to set a password on first sign-in. Existing users can use this flow to reset theirs.',
    '验证并继续': 'Verify and continue',
    '首次使用或忘记密码？': 'New here or forgot your password?',
    '验证邮箱并设置密码': 'Verify email / reset password',
    '已有密码？': 'Already have a password?',
    '返回登录': 'Back to log in',
    '你已登录': 'You are signed in',
    '你的 HIITUN 账号已验证。': 'Your HIITUN account is verified.',
    '当前会员': 'Current membership',
    '未开通会员': 'No active membership',
    '可选择下方付费套餐': 'Choose a paid plan below',
    '/ 月': '/ month',
    '/ 永久': '/ lifetime',
    '会员状态与桌面软件共用同一账号数据。': 'Your membership status is shared with the desktop app through your HIITUN account.',
    '选择月度订阅计划': 'Choose a monthly plan',
    '付款由 Waffo 安全处理；确认后会员状态会同步到桌面软件。': 'Payments are securely processed by Waffo. Your membership syncs to the desktop app after confirmation.',
    '打开安全结账页面': 'Open secure checkout',
    '刷新会员状态': 'Refresh membership',
    '取消自动续费': 'Cancel renewal',
    '正在创建安全结账页面…': 'Preparing secure checkout…',
    '已在新标签页打开 Waffo 安全结账。': 'Waffo secure checkout opened in a new tab.',
    '浏览器拦截了新标签页，请点击下方链接继续。': 'Your browser blocked the new tab. Use the link below to continue.',
    '付款已完成跳转，正在等待支付方确认；可稍后刷新会员状态。': 'You returned from checkout. Payment confirmation is pending; refresh your membership shortly.',
    '当前订阅仍有效，请先取消自动续费并在周期结束后选择其他计划': 'Your subscription is active. Cancel renewal and choose another plan after this billing period ends.',
    '当前没有生效中的订阅': 'There is no active subscription to cancel.',
    '已取消自动续费；当前会员权限保留至计费周期结束。': 'Renewal is canceled. Membership remains active until the end of this billing period.',
    '已取消自动续费，有效期至': 'Renewal canceled; active through',
    '取消订阅会停止下一周期扣费，当前已付款周期仍可使用。确定继续吗？': 'Canceling stops the next renewal. Your paid period remains active. Continue?',
    '会员状态已刷新。': 'Membership status refreshed.',
    '会员有效期至': 'Membership valid through',
    '会员已过期': 'Membership expired',
    '会员有效': 'Membership active',
    '体验版': 'Explore',
    '标准版': 'Standard',
    '专业版': 'Pro',
    '桌面软件中的草稿、素材、社媒授权和其他工作数据仍保存在本机；当前网站不提供跨设备数据同步。': 'Drafts, assets, social authorizations, and other desktop app data remain on that device. This website does not currently sync data across devices.',
    '下载桌面软件': 'Download desktop app',
    '退出登录': 'Log out',
    '安全连接': 'SECURE CONNECTION',
    '继续即表示你已阅读并同意': 'By continuing, you acknowledge the',
    '服务条款': 'Terms of Service',
    '和': 'and',
    '隐私政策': 'Privacy Policy',
    '佛山市南海区合豚互联网服务部': 'Foshan Nanhai Hetun Internet Service Department'
  };

  const serverErrors = {
    '请输入有效邮箱': 'Please enter a valid email address.',
    '密码长度应为 8–72 个字符': 'Password must be 8–72 characters.',
    '邮箱或密码不正确；首次登录请先验证邮箱并设置密码': 'Email or password is incorrect. For your first sign-in, verify your email and set a password.',
    '登录已过期，请重新登录': 'Your session expired. Please sign in again.',
    '登录服务暂时不可用': 'The sign-in service is temporarily unavailable. Please try again later.',
    '登录服务暂时不可用，请稍后重试': 'The sign-in service is temporarily unavailable. Please try again later.',
    '支付服务暂时不可用，请稍后重试': 'The payment service is temporarily unavailable. Please try again later.',
    '该订阅计划尚未完成支付配置': 'This subscription plan is not configured yet.',
    '支付服务尚未完成生产环境配置': 'Production payment settings are not configured yet.',
    '请先登录 HIITUN 账号': 'Please sign in to your HIITUN account first.',
    '当前账号没有可管理的订阅': 'There is no subscription to manage on this account.',
    '当前没有生效中的订阅': 'There is no active subscription to cancel.',
    '请在 60 秒后重新获取验证码': 'Please wait 60 seconds before requesting another code.',
    '邮箱登录服务尚未开通，请联系管理员配置发信服务': 'Email sign-in is not enabled yet. Please contact support.',
    '验证码发送失败，请稍后重试': 'Could not send the code. Please try again later.',
    '验证码无效或已过期，请重新获取': 'The code is invalid or expired. Please request a new one.',
    '验证码不正确': 'The code is incorrect.',
    '请输入 6 位验证码': 'Enter the 6-digit verification code.'
  };

  let language = readSetting(LANGUAGE_KEY, 'zh') === 'en' ? 'en' : 'zh';
  let theme = readSetting(THEME_KEY, root.dataset.theme || 'dark') === 'light' ? 'light' : 'dark';
  let mode = 'login';
  let codeTimer = null;
  let signedInUser = null;
  let checkoutPending = false;
  const paymentReturned = new URLSearchParams(window.location.search).get('payment') === 'success';

  function readSetting(key, fallback) {
    try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
  }

  function saveSetting(key, value) {
    try { localStorage.setItem(key, value); } catch { /* Preferences are optional. */ }
  }

  function text(chinese) {
    return language === 'en' ? (translations[chinese] || chinese) : chinese;
  }

  function setStatus(element, message, state = 'error') {
    if (!element) return;
    element.textContent = message;
    if (state) element.dataset.state = state;
    else delete element.dataset.state;
  }

  function localizeServerError(message) {
    return language === 'en' ? (serverErrors[message] || 'The request could not be completed. Please try again.') : message;
  }

  async function request(path, body) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    const token = readSetting(TOKEN_KEY, '');
    const headers = {};
    if (body !== undefined) headers['Content-Type'] = 'application/json';
    if (token) headers.Authorization = `Bearer ${token}`;
    try {
      const response = await fetch(path, {
        method: body === undefined ? 'GET' : 'POST',
        headers,
        body: body === undefined ? undefined : JSON.stringify(body),
        cache: 'no-store',
        signal: controller.signal
      });
      let data = {};
      try { data = await response.json(); } catch { /* Use a safe message for proxy and network errors. */ }
      if (!response.ok) {
        if (response.status === 401 && path === '/auth/me') {
          try { localStorage.removeItem(TOKEN_KEY); } catch { /* Ignore unavailable storage. */ }
        }
        throw new Error(data.message || '登录服务暂时不可用');
      }
      return data;
    } catch (error) {
      if (error instanceof TypeError || (error instanceof DOMException && error.name === 'AbortError')) {
        throw new Error('登录服务暂时不可用');
      }
      throw error;
    } finally {
      window.clearTimeout(timeout);
    }
  }

  function updateControls() {
    const isDark = theme === 'dark';
    const themeText = language === 'en' ? (isDark ? 'Light mode' : 'Dark mode') : (isDark ? '白天模式' : '黑夜模式');
    const themeAria = language === 'en' ? (isDark ? 'Switch to light mode' : 'Switch to dark mode') : (isDark ? '切换到白天模式' : '切换到黑夜模式');
    if (themeLabel) themeLabel.textContent = themeText;
    if (themeIcon) themeIcon.textContent = isDark ? '☼' : '☾';
    if (themeButton) {
      themeButton.setAttribute('aria-label', themeAria);
      themeButton.title = themeAria;
    }
    if (languageLabel) languageLabel.textContent = language === 'zh' ? 'EN' : '中文';
    if (languageButton) {
      const label = language === 'zh' ? '切换到英文' : 'Switch language to Chinese';
      languageButton.setAttribute('aria-label', label);
      languageButton.title = label;
    }
  }

  function applyLanguage(nextLanguage, persist = false) {
    language = nextLanguage === 'en' ? 'en' : 'zh';
    root.lang = language === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      element.textContent = text(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      element.setAttribute('placeholder', text(key));
    });
    document.querySelectorAll('[data-privacy-link]').forEach((link) => {
      link.setAttribute('href', language === 'en' ? '/privacy-policy-en.html' : '/privacy-policy.html');
    });
    document.querySelectorAll('[data-terms-link]').forEach((link) => {
      link.setAttribute('href', language === 'en' ? '/terms-en.html' : '/terms.html');
    });
    document.title = language === 'en' ? 'Log in · HIITUN Multi-Account Operations' : '登录 · HIITUN 多账号运营';
    document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'en' ? 'Sign in to your HIITUN multi-account media workspace.' : '登录 HIITUN 多账号运营工作台账号。');
    document.querySelector('#account-title').textContent = text(mode === 'login' ? '登录 HIITUN' : '设置密码');
    document.querySelector('#account-intro').textContent = text(mode === 'login' ? '使用桌面软件中注册的邮箱和密码登录。' : '请输入邮箱验证码设置或重置密码。');
    updateControls();
    if (signedInUser) renderMembership();
    if (persist) saveSetting(LANGUAGE_KEY, language);
  }

  function applyTheme(nextTheme, persist = false) {
    theme = nextTheme === 'light' ? 'light' : 'dark';
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f4f7fb' : '#070b16');
    document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', theme);
    updateControls();
    if (persist) saveSetting(THEME_KEY, theme);
  }

  function setMode(nextMode) {
    mode = nextMode === 'setup' ? 'setup' : 'login';
    loginForm.hidden = mode !== 'login';
    setupForm.hidden = mode !== 'setup';
    document.querySelector('#login-switch-row').hidden = mode !== 'login';
    document.querySelector('#setup-switch-row').hidden = mode !== 'setup';
    const title = document.querySelector('#account-title');
    const intro = document.querySelector('#account-intro');
    title.textContent = text(mode === 'login' ? '登录 HIITUN' : '设置密码');
    intro.textContent = text(mode === 'login' ? '使用桌面软件中注册的邮箱和密码登录。' : '请输入邮箱验证码设置或重置密码。');
    setStatus(loginStatus, '', '');
    setStatus(setupStatus, '', '');
    if (mode === 'setup') {
      const loginEmail = document.querySelector('#login-email').value;
      const setupEmail = document.querySelector('#setup-email');
      if (!setupEmail.value && loginEmail) setupEmail.value = loginEmail;
      window.setTimeout(() => (setupEmail.value ? document.querySelector('#setup-code') : setupEmail).focus(), 0);
    } else {
      const loginEmail = document.querySelector('#login-email');
      window.setTimeout(() => (loginEmail.value ? document.querySelector('#login-password') : loginEmail).focus(), 0);
    }
  }

  function showSignedIn(user) {
    signedInUser = typeof user === 'string' ? { email: user } : user;
    const email = signedInUser?.email || '';
    loginView.hidden = true;
    signedInView.hidden = false;
    document.querySelector('#account-email').textContent = email;
    document.querySelector('#account-avatar').textContent = (email.trim()[0] || 'H').toUpperCase();
    renderMembership();
    if (paymentReturned) setStatus(checkoutStatus, text('付款已完成跳转，正在等待支付方确认；可稍后刷新会员状态。'), 'success');
  }

  function renderMembership() {
    const membership = signedInUser?.membership;
    const planNames = { explore: '体验版', standard: '标准版', pro: '专业版' };
    const isActive = membership?.status === 'active'
      && (!membership.expiresAt || membership.expiresAt * 1000 > Date.now());
    if (planGrid) {
      planGrid.querySelectorAll('[data-plan]').forEach((button) => {
        button.disabled = checkoutPending || isActive;
      });
    }
    if (cancelSubscriptionButton) {
      cancelSubscriptionButton.hidden = !isActive || Boolean(membership?.cancelAtPeriodEnd);
      cancelSubscriptionButton.disabled = checkoutPending;
    }
    if (!membership || membership.plan === 'none') {
      membershipPlan.textContent = text('未开通会员');
      membershipDetail.textContent = text('可选择下方付费套餐');
      return;
    }
    const planName = text(planNames[membership.plan] || '未开通会员');
    if (membership.status === 'expired') {
      membershipPlan.textContent = `${planName} · ${text('会员已过期')}`;
      membershipDetail.textContent = membership.expiresAt
        ? `${text('会员有效期至')} ${new Date(membership.expiresAt * 1000).toLocaleDateString(language === 'en' ? 'en-US' : 'zh-CN')}`
        : text('会员已过期');
      return;
    }
    membershipPlan.textContent = planName;
    if (membership.cancelAtPeriodEnd && membership.expiresAt) {
      membershipDetail.textContent = `${text('已取消自动续费，有效期至')} ${new Date(membership.expiresAt * 1000).toLocaleDateString(language === 'en' ? 'en-US' : 'zh-CN')}`;
    } else {
      membershipDetail.textContent = membership.expiresAt
        ? `${text('会员有效期至')} ${new Date(membership.expiresAt * 1000).toLocaleDateString(language === 'en' ? 'en-US' : 'zh-CN')}`
        : text('会员有效');
    }
  }

  function showLogin(message = '') {
    signedInUser = null;
    signedInView.hidden = true;
    loginView.hidden = false;
    if (message) setStatus(loginStatus, message, 'error');
  }

  async function checkExistingSession() {
    const token = readSetting(TOKEN_KEY, '');
    if (!token) return;
    try {
      const result = await request('/auth/me');
      if (result.user?.email) showSignedIn(result.user);
      else showLogin();
    } catch (error) {
      const message = error.message === '登录已过期，请重新登录'
        ? text(error.message)
        : localizeServerError(error.message || '登录服务暂时不可用');
      showLogin(message);
    }
  }

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    setStatus(loginStatus, '', '');
    const emailInput = document.querySelector('#login-email');
    const passwordInput = document.querySelector('#login-password');
    const email = emailInput.value.trim().toLowerCase();
    if (!emailInput.validity.valid) {
      setStatus(loginStatus, text('请输入有效邮箱'));
      emailInput.focus();
      return;
    }
    if (passwordInput.value.length < 8 || passwordInput.value.length > 72) {
      setStatus(loginStatus, text('密码长度应为 8–72 个字符'));
      passwordInput.focus();
      return;
    }
    const submit = loginForm.querySelector('.account-submit');
    submit.disabled = true;
    submit.textContent = text('登录中…');
    try {
      const result = await request('/auth/login', { email, password: passwordInput.value });
      if (!result.token || !result.user?.email) throw new Error('登录服务暂时不可用');
      localStorage.setItem(TOKEN_KEY, result.token);
      showSignedIn(result.user);
    } catch (error) {
      setStatus(loginStatus, localizeServerError(error.message));
    } finally {
      submit.disabled = false;
      submit.textContent = text('登录');
    }
  });

  setupForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    setStatus(setupStatus, '', '');
    const emailInput = document.querySelector('#setup-email');
    const codeInput = document.querySelector('#setup-code');
    const passwordInput = document.querySelector('#setup-password');
    const confirmInput = document.querySelector('#setup-confirm');
    const email = emailInput.value.trim().toLowerCase();
    if (!emailInput.validity.valid) {
      setStatus(setupStatus, text('请输入有效邮箱'));
      emailInput.focus();
      return;
    }
    if (!/^\d{6}$/.test(codeInput.value.trim())) {
      setStatus(setupStatus, text('请输入 6 位验证码'));
      codeInput.focus();
      return;
    }
    if (passwordInput.value.length < 8 || passwordInput.value.length > 72) {
      setStatus(setupStatus, text('密码长度应为 8–72 个字符'));
      passwordInput.focus();
      return;
    }
    if (passwordInput.value !== confirmInput.value) {
      setStatus(setupStatus, text('两次输入的密码不一致'));
      confirmInput.focus();
      return;
    }
    const submit = setupForm.querySelector('.account-submit');
    submit.disabled = true;
    submit.textContent = text('正在验证…');
    try {
      const result = await request('/auth/register', { email, code: codeInput.value.trim(), password: passwordInput.value });
      if (!result.token || !result.user?.email) throw new Error('登录服务暂时不可用');
      localStorage.setItem(TOKEN_KEY, result.token);
      showSignedIn(result.user);
    } catch (error) {
      setStatus(setupStatus, localizeServerError(error.message));
    } finally {
      submit.disabled = false;
      submit.textContent = text('验证并继续');
    }
  });

  sendCodeButton.addEventListener('click', async () => {
    setStatus(setupStatus, '', '');
    const emailInput = document.querySelector('#setup-email');
    const email = emailInput.value.trim().toLowerCase();
    if (!emailInput.validity.valid) {
      setStatus(setupStatus, text('请输入有效邮箱'));
      emailInput.focus();
      return;
    }
    sendCodeButton.disabled = true;
    try {
      const result = await request('/auth/code', { email });
      setStatus(setupStatus, language === 'en' ? 'Code sent. Check your inbox and spam folder.' : result.message || '验证码已发送，请检查收件箱或垃圾邮件', 'success');
      startCodeCountdown(Number(result.retryAfter) || 60);
      document.querySelector('#setup-code').focus();
    } catch (error) {
      setStatus(setupStatus, localizeServerError(error.message));
      sendCodeButton.disabled = false;
    }
  });

  async function refreshMembership() {
    const result = await request('/auth/me');
    if (!result.user?.email) throw new Error('登录服务暂时不可用');
    showSignedIn(result.user);
  }

  planGrid?.addEventListener('click', async (event) => {
    const button = event.target.closest('button[data-plan]');
    if (!button || checkoutPending) return;
    checkoutPending = true;
    if (checkoutLink) checkoutLink.hidden = true;
    setStatus(checkoutStatus, text('正在创建安全结账页面…'), 'success');
    renderMembership();

    const checkoutWindow = window.open('about:blank', '_blank');
    if (checkoutWindow) checkoutWindow.opener = null;
    try {
      const result = await request('/api/waffo/checkout', { plan: button.dataset.plan });
      const checkoutUrl = new URL(result.checkoutUrl);
      if (checkoutUrl.protocol !== 'https:') throw new Error('支付服务暂时不可用，请稍后重试');
      if (checkoutWindow) {
        checkoutWindow.location.replace(checkoutUrl.toString());
        setStatus(checkoutStatus, text('已在新标签页打开 Waffo 安全结账。'), 'success');
      } else {
        if (checkoutLink) {
          checkoutLink.href = checkoutUrl.toString();
          checkoutLink.hidden = false;
        }
        setStatus(checkoutStatus, text('浏览器拦截了新标签页，请点击下方链接继续。'), 'error');
      }
    } catch (error) {
      checkoutWindow?.close();
      setStatus(checkoutStatus, localizeServerError(error.message), 'error');
    } finally {
      checkoutPending = false;
      renderMembership();
    }
  });

  refreshMembershipButton?.addEventListener('click', async () => {
    refreshMembershipButton.disabled = true;
    try {
      await refreshMembership();
      if (!paymentReturned) setStatus(checkoutStatus, text('会员状态已刷新。'), 'success');
    } catch (error) {
      setStatus(checkoutStatus, localizeServerError(error.message), 'error');
    } finally {
      refreshMembershipButton.disabled = false;
    }
  });

  cancelSubscriptionButton?.addEventListener('click', async () => {
    if (!window.confirm(text('取消订阅会停止下一周期扣费，当前已付款周期仍可使用。确定继续吗？'))) return;
    cancelSubscriptionButton.disabled = true;
    try {
      const result = await request('/api/waffo/cancel', {});
      if (signedInUser?.membership) signedInUser.membership.cancelAtPeriodEnd = result.status === 'canceling';
      renderMembership();
      setStatus(checkoutStatus, text('已取消自动续费；当前会员权限保留至计费周期结束。'), 'success');
    } catch (error) {
      setStatus(checkoutStatus, localizeServerError(error.message), 'error');
      cancelSubscriptionButton.disabled = false;
    }
  });

  function startCodeCountdown(seconds) {
    if (codeTimer) window.clearInterval(codeTimer);
    let remaining = Math.max(1, Math.floor(seconds));
    const render = () => {
      sendCodeButton.textContent = language === 'en' ? `Resend in ${remaining}s` : `${remaining} 秒后重发`;
      if (remaining <= 0) {
        window.clearInterval(codeTimer);
        codeTimer = null;
        sendCodeButton.disabled = false;
        sendCodeButton.textContent = text('获取验证码');
        return;
      }
      remaining -= 1;
    };
    render();
    codeTimer = window.setInterval(render, 1000);
  }

  document.querySelectorAll('[data-mode]').forEach((button) => {
    button.addEventListener('click', () => setMode(button.dataset.mode));
  });

  document.querySelector('#logout-button').addEventListener('click', async () => {
    const button = document.querySelector('#logout-button');
    button.disabled = true;
    setStatus(logoutStatus, '', '');
    let signOutError = '';
    try {
      await request('/auth/logout', {});
    } catch (error) {
      signOutError = localizeServerError(error.message);
    } finally {
      try { localStorage.removeItem(TOKEN_KEY); } catch { /* Ignore unavailable storage. */ }
      button.disabled = false;
      showLogin(signOutError);
    }
  });

  themeButton?.addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark', true));
  languageButton?.addEventListener('click', () => applyLanguage(language === 'zh' ? 'en' : 'zh', true));
  document.querySelector('[data-current-year]').textContent = String(new Date().getFullYear());

  applyTheme(theme);
  applyLanguage(language);
  checkExistingSession();
})();
