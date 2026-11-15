(() => {
  const body = document.body;
  const root = document.documentElement;
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-nav');
  const themeButton = document.querySelector('#theme-toggle');
  const languageButton = document.querySelector('#language-toggle');
  const themeLabel = themeButton?.querySelector('.theme-label');
  const themeIcon = themeButton?.querySelector('.utility-icon');
  const languageLabel = languageButton?.querySelector('.language-label');

  const copy = {
    "免费起步": "Free to start",
    "免费开始，按需升级。": "Start free and upgrade when you need to.",
    "0 元": "Free",
    "初始 0 积分": "Starts with 0 points",
    "下载体验版": "Download the free app",
    "/ 永久": "/ lifetime",
    "美元 · 一次付款": "USD · one-time payment",
    "购买专业版": "Buy Pro",
    "每个成功付款周期赠 500 积分": "500 points per paid billing cycle",
    "一次赠 3,000 积分": "3,000 points with purchase",
    "登录后购买会员，权益自动同步到桌面软件。积分包可在客户端购买，每 1 美元兑换 1,000 积分。": "Sign in to buy a membership and sync it to the desktop app. Buy 1,000 points for $1 in the app.",
    "体验版支持 3 个平台账号和 1 个配置。标准版和专业版均支持 50 个平台账号和 8 个配置。": "Free supports 3 accounts and 1 configuration. Standard and Pro each support 50 accounts and 8 configurations.",
    "使用 AI 如何计费？": "How is AI usage billed?",
    "内置 AI 每次成功生成或改写扣 1 积分。使用自有 API 时，费用由你向所选提供商支付。": "Built-in AI costs 1 point per successful generation or rewrite. For your own API, you pay the provider directly.",

    "客户端下载": "Downloads",
    "下载 HIITUN": "Download HIITUN",
    "选择与你的电脑匹配的安装包。": "Choose the installer for your computer.",
    "Apple 芯片": "Apple Silicon",
    "Intel 芯片": "Intel Mac",
    "下载 Windows": "Download for Windows",
    "下载 Mac Apple 芯片版": "Download for Apple Silicon",
    "下载 Mac Intel 版": "Download for Intel Mac",
    "在 Mac 的「关于本机」查看芯片型号。Mac 安装包目前未通过 Apple 签名和公证。": "Find your chip type in About This Mac. The Mac installers are currently unsigned and not notarized.",

    '跳转到主要内容': 'Skip to main content',
    '多账号运营': 'Multi-Account Operations',
    '产品能力': 'Features',
    '软件界面': 'Software interface',
    '平台支持': 'Platform support',
    '使用流程': 'How It Works',
    '数据与隐私': 'Data & Privacy',
    '订阅计划': 'Plans',
    '账号与平台': 'Accounts & platforms',
    '登录': 'Log in',
    '让多平台运营，': 'Bring all your social channels',
    '回到一张清晰的工作台。': 'into one clear workspace.',
    '登录一个 HIITUN 账号，连接多平台账号；用 AI 自动准备内容、安排运营任务，再按平台规则确认或自动发布。HIITUN 为创作者和小型团队提供一套本地优先的桌面运营工具。': 'Sign in with one HIITUN account and connect multiple platforms. Use AI to prepare content and schedule operations, then confirm or automate publishing according to each platform. HIITUN is a local-first desktop workspace for creators and small teams.',
    '查看核心能力': 'Explore core capabilities',
    '查看软件界面': 'View software interface',
    '查看订阅方案': 'View plans',
    '查看平台与方案': 'View platforms and plans',
    '一个账号，': 'One account,',
    '管理所有平台。': 'manage every platform.',
    '登录一次，连接中国和全球平台。用 AI 生成内容、安排任务并发布，少切换，更多产出。': 'Sign in once, connect Chinese and global platforms, and use AI to create and publish with fewer switches.',
    '中国与全球平台': 'Chinese and global platforms',
    '内容生成与发布': 'Content generation and publishing',
    '三档计划，随时升级': 'Three plans, upgrade anytime',
    '登录一次，管理日常运营': 'One sign-in for daily operations',
    '15 个平台': '15 platforms',
    '月付计划': 'Monthly plans',
    '下载软件': 'Download the app',
    '百度网盘 · 提取码': 'Baidu Netdisk · Code',
    '账号额度随计划提升': 'Account limits scale with your plan',
    '本机': 'On-device',
    '草稿、素材与任务本地保存': 'Drafts, assets, and tasks stay local',
    '自选': 'Your choice',
    '连接你自己的 AI API': 'Connect your own AI API',
    '本机工作区': 'Local workspace',
    '账号工作台': 'Account workspace',
    '本地数据': 'Local data',
    '已连接账号': 'Connected accounts',
    '运营配置': 'Workspace profiles',
    '本地草稿': 'Local drafts',
    '保存在此设备': 'Saved on this device',
    '账号概览': 'Account overview',
    '查看全部': 'View all',
    '品牌频道': 'Brand channel',
    '创作者主页': 'Creator profile',
    '产品动态': 'Product updates',
    '账号配置 01': 'Profile 01',
    '账号配置 02': 'Profile 02',
    '已连接': 'Connected',
    '从草稿开始': 'Start with a draft',
    '把想法和素材放在一起，编辑完成后再发布。': 'Keep ideas and assets together, then publish when your content is ready.',
    '打开本地草稿': 'Open local drafts',
    '界面示意 · 示例数据': 'Interface preview · Sample data',
    '本地优先': 'Local-first',
    '你的内容留在自己的设备': 'Your content stays on your device',
    '自配 AI API': 'Your own AI API',
    '模型与用量由你选择': 'Choose your model and usage',
    '向下了解 HIITUN': 'Explore HIITUN',
    '一个工作区，照看日常运营里的关键环节': 'One workspace for the essentials of your daily operations',
    'THE SOFTWARE INTERFACE': 'THE SOFTWARE INTERFACE',
    'PLATFORM COVERAGE': 'PLATFORM COVERAGE',
    '一处连接。': 'in one workspace.',
    '15 个平台，统一账号状态与发布流程。': '15 platforms, one view of account status and publishing.',
    '具体能力以平台授权为准。': 'Available capabilities depend on platform authorization.',
    '运营全流程。': 'the full workflow.',
    '账号、AI 任务、发布队列，都在软件里。': 'Accounts, AI tasks, and publishing queues in one app.',
    '三步，': 'Three steps,',
    '开始运营。': 'to get started.',
    '连接账号、准备内容、确认发布。': 'Connect accounts, prepare content, confirm publishing.',
    '计划决定额度': 'Limits follow your plan',
    '整理内容，需要时接入 AI。': 'Organize content, add AI when needed.',
    '本地保存': 'Stored locally',
    '检查账号，一键确认发布。': 'Check accounts, confirm publishing.',
    '由你确认': 'You confirm',
    '内容留在': 'Your content stays',
    '草稿和素材本地保存，只有在你操作时才连接平台或 AI。': 'Drafts and assets stay local; platforms and AI connect when you act.',
    '草稿、素材与配置保存在本机。': 'Drafts, assets, and settings stay on-device.',
    '按你的操作连接平台。': 'Connect platforms when you act.',
    'AI 只发送到你选择的服务商。': 'AI requests go only to your chosen provider.',
    '账号、订阅和网站日志按隐私政策处理。': 'Accounts, subscriptions, and website logs follow the Privacy Policy.',
    '选一个计划，': 'Choose a plan,',
    '马上开始。': 'and start today.',
    '按账号规模选择，月付，随时升级。': 'Choose by account volume. Pay monthly and upgrade anytime.',
    '适合个人创作者。': 'For individual creators.',
    '适合稳定运营。': 'For consistent operations.',
    '适合团队与矩阵运营。': 'For teams and media matrices.',
    '开始订阅': 'Start subscription',
    '月付订阅，登录后安全结账；会员权益自动同步到桌面软件。': 'Pay monthly, check out securely after sign-in, and keep membership synced with the desktop app.',
    '计划、AI 和数据，快速了解。': 'Plans, AI, and data at a glance.',
    '区别在账号和配置额度：体验版 10/2，标准版 20/4，专业版 50/8。': 'Plans differ by account and profile limits: Explore 10/2, Standard 20/4, and Pro 50/8.',
    '不包含。AI 服务费用由你直接支付给所选提供商。': 'No. Pay your selected AI provider directly.',
    '草稿和素材保存在本机，操作时才连接平台或 AI。账号与订阅信息按隐私政策处理。': 'Drafts and assets stay on-device; platforms and AI connect when you act. Account and subscription data follow the Privacy Policy.',
    '点击“登录”，使用桌面软件注册的 HIITUN 账号邮箱和密码登录。': 'Select “Log in” and use the HIITUN account email and password from the desktop app.',
    '多平台运营，集中完成。': 'Multi-platform operations, together.',
    '中国与全球平台，': 'Chinese and global platforms,',
    '都在一个工作区里。': 'in one workspace.',
    '登录 HIITUN 后连接你拥有的账号。平台 Logo 和名称与桌面软件保持一致，具体接入与发布能力以平台授权为准。': 'Connect your accounts after signing in to HIITUN. Platform logos and names match the desktop app; available connections and publishing depend on platform authorization.',
    '中国平台': 'Chinese platforms',
    '全球平台': 'Global platforms',
    '9 个平台': '9 platforms',
    '6 个平台': '6 platforms',
    '平台接入和发布能力以软件内实际授权与平台规则为准。': 'Connections and publishing depend on in-app authorization and each platform’s rules.',
    '平台、账号与 AI 发布，': 'Platforms, accounts, and AI publishing,',
    '直接在软件里完成。': 'done directly in the app.',
    '登录一次后，在同一工作台管理多平台账号、配置 AI 自动运营任务，并查看发布状态。': 'Sign in once to manage multiple platforms, configure AI operations, and monitor publishing from one workspace.',
    '平台 / 账号运营': 'Platform / account operations',
    'AI 内容发布': 'AI content publishing',
    '平台账号': 'Platform accounts',
    '正常连接': 'Healthy connections',
    '待处理': 'Needs attention',
    '+ 接入账号': '+ Connect account',
    '6 个平台': '6 platforms',
    '最近检查 2 分钟前': 'Checked 2 minutes ago',
    '需要重新登录': 'Needs sign-in',
    '已接入的平台': 'Connected platforms',
    '平台 / 账号': 'Platform / account',
    '状态': 'Status',
    '操作': 'Action',
    '正常': 'Healthy',
    '查看': 'View',
    'AI 自动运营': 'AI automation',
    '运行中': 'Running',
    '今日任务 03': '03 tasks today',
    '自动发布队列': 'Automated publishing queue',
    '今日已发布': 'Published today',
    '平台适配': 'Platform adaptation',
    '已完成': 'Completed',
    '排队中': 'Queued',
    '发布队列': 'Publishing queue',
    '查看任务': 'View tasks',
    '登录后使用完整功能': 'Sign in to use all features',
    '软件导航': 'Software navigation',
    '软件界面预览，示例数据': 'Software interface preview, sample data',
    'AI 自动运营界面预览': 'AI automation interface preview',
    '账号管理': 'Account management',
    '内容草稿': 'Content drafts',
    '素材整理': 'Asset library',
    '手动发布': 'Manual publishing',
    '先看三项核心能力，': 'Start with the three core capabilities,',
    '再决定如何开始。': 'then choose how to begin.',
    '从多账号接入到 AI 内容运营，再到透明的订阅计划，HIITUN 把每天最重要的动作放在一个入口。': 'From multi-account access to AI content operations and clear subscription plans, HIITUN puts the actions that matter most in one place.',
    '多账号多平台管理': 'Manage multiple accounts and platforms',
    '一个工作台连接 X、Facebook、Instagram、YouTube、TikTok、Telegram 等平台账号，集中查看状态和运营配置。': 'Connect accounts across X, Facebook, Instagram, YouTube, TikTok, Telegram, and more in one workspace. Check status and workspace profiles in one place.',
    '查看账号与平台': 'See accounts and platforms',
    '账号状态': 'Account status',
    '独立登录环境': 'Separate login environments',
    '运营配置': 'Workspace profiles',
    'AI 自动内容运营、自动发布': 'AI content operations and automated publishing',
    '用 AI 生成和复盘内容，编排日常运营任务，并按平台能力和账号授权执行自动发布；你可以随时检查和调整。': 'Generate and review content with AI, orchestrate daily operations, and automate publishing within each platform’s capabilities and your account permissions. You can review and adjust at any time.',
    '内容生成': 'Content generation',
    '任务编排': 'Task orchestration',
    '自动发布': 'Automated publishing',
    '查看运营流程': 'See the workflow',
    '订阅计划，按规模选择': 'Subscription plans for your scale',
    '体验版、标准版和专业版按月提供清晰额度，适合从个人创作者到工作室的不同运营规模。': 'Explore, Standard, and Pro plans provide clear monthly limits for everyone from independent creators to studios.',
    '每月': 'per month',
    '查看订阅计划': 'See subscription plans',
    '登录多账号，': 'Sign in to multiple accounts,',
    '一处管理多平台运营。': 'then run every platform from one place.',
    '同一个 HIITUN 账号可在网站与桌面软件使用。登录后，按平台连接多个账号、查看状态、准备内容并确认发布。': 'Use the same HIITUN account on the website and desktop app. After signing in, connect multiple accounts by platform, check their status, prepare content, and confirm each post.',
    '一个账号，网站和软件通用': 'One account for the website and desktop app',
    '立即登录': 'Log in now',
    '账号已连接': 'Account connected',
    '你的 HIITUN 账号': 'Your HIITUN account',
    '会员权益与桌面软件保持一致': 'Membership stays in sync with the desktop app',
    '邮箱 + 密码': 'Email + password',
    '安全连接': 'Secure connection',
    '使用桌面软件注册的邮箱和密码登录网站；账号身份与会员状态从同一账户服务读取。': 'Sign in with the email and password registered in the desktop app. Your identity and membership status come from the same account service.',
    '多平台账号，集中运营': 'Manage multiple platforms in one place',
    '6+ 平台': '6+ platforms',
    '多平台运营示意': 'Multi-platform operations preview',
    '在同一个工作台连接多个平台账号，按平台调整内容，查看连接状态，再由你确认发布。': 'Connect multiple platform accounts in one workspace, adapt content for each platform, check connection status, and confirm before publishing.',
    '连接账号': 'Connect accounts',
    '适配内容': 'Adapt content',
    '确认发布': 'Confirm publishing',
    '把散落的运营步骤，': 'Bring scattered workflows',
    '收拢到熟悉的节奏里。': 'into a clear, familiar rhythm.',
    '从账号状态到内容草稿，把重复切换变成一套可管理的日常流程。你仍然掌握每一步的编辑与发布。': 'Turn constant context switching into a manageable routine, from account status to content drafts. You stay in control of every edit and post.',
    '多平台账号，统一查看': 'Manage multiple platform accounts in one place',
    '按订阅额度管理平台账号与运营配置，在一个工作区掌握账号连接状态。': 'Manage platform accounts and workspace profiles within your plan, and check connection status from one workspace.',
    '最多 10 / 20 / 50 个账号 · 2 / 4 / 8 个运营配置': 'Up to 10 / 20 / 50 accounts · 2 / 4 / 8 workspace profiles',
    '草稿和素材，在本机整理': 'Organize drafts and assets locally',
    '为创作过程保留自己的文件与上下文，按需要归档和复用。': 'Keep your files and context close to your creative work, ready to organize and reuse.',
    '编辑完成，由你确认发布': 'Review and publish on your terms',
    '在工作台准备内容并检查账号；你决定何时发布以及发到哪里。': 'Prepare content and check accounts in your workspace. You decide when and where to publish.',
    '内容草稿': 'Content draft',
    '连接你选择的 AI 服务': 'Connect the AI service you choose',
    '使用你自己配置的 AI API。服务商、模型和用量由你选择，AI 服务费用由你与对应提供商结算。': 'Use your own AI API. Choose the provider, model, and usage level; AI service fees are paid directly to your provider.',
    'HIITUN 订阅不包含第三方 AI API 用量费用': 'HIITUN plans do not include third-party AI API usage fees',
    '内容运营日常。': 'content operations.',
    '三步，开始你的': 'Three steps to start your',
    'HIITUN 是安装在你设备上的桌面软件。账号接入、内容准备和发布确认，都由你控制。': 'HIITUN is desktop software installed on your device. You control account connections, content preparation, and publishing.',
    '连接账号': 'Connect accounts',
    '按你的工作方式添加社媒账号，选择对应的运营配置。': 'Add social accounts to fit your workflow and choose a workspace profile for each.',
    '账号与配置额度随计划变化': 'Account and profile limits depend on your plan',
    '准备内容': 'Prepare content',
    '在本机整理草稿与素材；需要 AI 辅助时，连接你自己的 API。': 'Organize drafts and assets locally. Connect your own API when you want AI assistance.',
    '数据保存在你的设备': 'Data stays on your device',
    '检查并发布': 'Review and publish',
    '按平台需要调整内容，检查目标账号，再由你确认发布。': 'Adapt content for each platform, check the target account, and confirm before publishing.',
    '发布行为由你发起': 'You initiate each post',
    '创作资料留在': 'Your creative work stays',
    '你自己的设备。': 'on your own device.',
    'HIITUN 将日常工作数据保存在本机。只有当你执行相应操作时，软件才会把必要信息发送给你选择的社媒平台或 AI 服务提供商。': 'HIITUN stores everyday work data locally. The software sends necessary information to your chosen social platform or AI provider only when you take the corresponding action.',
    '阅读隐私政策': 'Read the Privacy Policy',
    '本地保存': 'Stored locally',
    '草稿、素材、任务、社媒授权与配置保存在你的设备。': 'Drafts, assets, tasks, social authorizations, and settings stay on your device.',
    '按操作发送': 'Sent when you act',
    '连接账号或发布内容时，按你的操作与平台交互。': 'The software interacts with a platform when you connect an account or publish content.',
    '使用自选 AI': 'Use your chosen AI',
    'AI 请求发送给你自行配置的服务提供商，相关用量由其计费。': 'AI requests go to the provider you configure, which bills you for usage.',
    '账号登录、订阅服务与网站访问日志按适用的隐私政策处理。请妥善保管设备与 API 凭据。': 'Account sign-in, subscriptions, and website access logs are handled under the applicable Privacy Policy. Keep your device and API credentials secure.',
    '按你的运营规模，': 'Choose a plan for',
    '选择合适的计划。': 'the size of your operation.',
    '所有价格均为美元月付。额度清晰，包含的核心工作方式一致。': 'All prices are in USD and billed monthly. Plans have clear limits and share the same core features.',
    '体验版': 'Explore',
    '适合刚开始整理多平台运营的创作者。': 'For creators getting started with multi-platform operations.',
    '/ 月': '/ month',
    '美元 · 按月订阅': 'USD · billed monthly',
    '个平台单账号管理': ' accounts on one platform',
    '个平台账号管理': ' platform accounts',
    '个运营配置': ' workspace profiles',
    '本地草稿与素材库': 'Local drafts and asset library',
    '手动编辑和发布': 'Manual editing and publishing',
    '使用自己的 AI API': 'Use your own AI API',
    '标准版': 'Standard',
    '适合独立创作者，给日常运营留出更多空间。': 'For independent creators who need more room for daily operations.',
    '专业版': 'Pro',
    '工作室与矩阵创作者': 'For studios and creator teams',
    '适合需要更大账号与运营配置额度的团队。': 'For teams that need higher account and profile limits.',
    '请先登录 HIITUN 账号，再在账号页面选择月度计划并前往 Waffo 安全结账。付款确认后，会员状态会同步到桌面软件。': 'Sign in to your HIITUN account, choose a monthly plan on the account page, and continue to secure Waffo checkout. Your membership syncs to the desktop app after payment confirmation.',
    '常见问题': 'Frequently Asked Questions',
    '关于计划、AI 用量和本地数据，你可能想先了解这些。': 'Here are a few things to know about plans, AI usage, and local data.',
    '联系支持': 'Contact support',
    '三个计划的主要区别是什么？': 'What is the difference between the three plans?',
    '主要区别是可管理的平台账号数量和运营配置数量，以及付款方式：体验版免费，3 个账号、1 个配置；标准版 $19 / 月，50 个账号、8 个配置；专业版 $99 一次性，50 个账号、8 个配置。标准版和专业版功能相同，只差付款方式。': 'Plans differ mainly in the number of platform accounts and workspace profiles, and in how you pay: Explore is free with 3 accounts and 1 profile; Standard is $19 per month with 50 accounts and 8 profiles; Pro is $99 one-time with 50 accounts and 8 profiles. Standard and Pro offer the same features and differ only in how you pay.',
    'HIITUN 月费包含 AI 服务费用吗？': 'Does the HIITUN monthly price include AI service fees?',
    '不包含。你可以连接自己的 AI API；模型服务的使用费用由你直接与所选提供商结算。': 'No. You can connect your own AI API. You pay your chosen provider directly for model usage.',
    '草稿和素材会上传到 HIITUN 云端吗？': 'Are drafts and assets uploaded to HIITUN’s cloud?',
    '草稿、素材、任务、社媒授权与配置保存在本机。软件仅在你发起相应操作时，向目标社媒平台或你选择的 AI 服务发送必要信息。账号、订阅和网站日志请查看隐私政策。': 'Drafts, assets, tasks, social authorizations, and settings stay on your device. The software sends necessary information to a social platform or your chosen AI provider only when you initiate an action. See the Privacy Policy for account, subscription, and website log information.',
    '如何登录？': 'How do I sign in?',
    '点击页面顶部或计划卡片中的“登录”，使用桌面软件注册的 HIITUN 账号邮箱和密码登录。': 'Select “Log in” in the header or on a plan card, then use the HIITUN account email and password registered in the desktop app.',
    '为创作者和小型团队准备的桌面运营工作台。': 'A desktop operations workspace for creators and small teams.',
    '了解更多': 'Explore',
    '法律与隐私': 'Legal & Privacy',
    '服务条款（简体中文）': 'Terms of Service (Chinese)',
    '隐私政策（简体中文）': 'Privacy Policy (Chinese)',
    '粤ICP备2024198509号-5 / 粤ICP备2024198509号-6': 'Guangdong ICP filings 2024198509-5 / 2024198509-6'
  };

  const ariaCopy = {
    '跳转到主要内容': 'Skip to main content',
    'HIITUN 多账号运营首页': 'HIITUN multi-account operations home',
    '打开导航菜单': 'Open navigation menu',
    '关闭导航菜单': 'Close navigation menu',
    '主导航': 'Main navigation',
    '网站显示设置': 'Display settings',
    '产品特点': 'Product highlights',
    'HIITUN 软件界面示意，内容为示例数据': 'HIITUN interface preview, sample data',
    '示例账号列表': 'Sample account list',
    '本地草稿示意': 'Local draft preview',
    '工作台组成': 'Workspace overview',
    '多平台运营示意': 'Multi-platform operations preview'
  };

  const pageMeta = {
    zh: {
      title: 'HIITUN 多账号运营工作台',
      description: '登录一次，连接中国和全球平台。用 AI 生成内容、安排任务并发布，选择适合你的会员计划。',
      ogTitle: 'HIITUN 多账号运营工作台',
      ogDescription: '15 个中国与全球平台、AI 内容发布和灵活的会员计划。'
    },
    en: {
      title: 'HIITUN Multi-Account Media Workspace',
      description: 'Sign in once to connect Chinese and global platforms, publish with AI, and choose a monthly plan for your account volume.',
      ogTitle: 'HIITUN Multi-Account Media Workspace',
      ogDescription: '15 Chinese and global platforms, AI publishing, and clear monthly plans.'
    }
  };

  const localizedText = [];
  const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
  let textNode;
  while ((textNode = walker.nextNode())) {
    const raw = textNode.nodeValue;
    const key = raw.trim();
    if (!key || !Object.hasOwn(copy, key)) continue;
    const leading = raw.match(/^\s*/)?.[0] || '';
    const trailing = raw.match(/\s*$/)?.[0] || '';
    localizedText.push({ node: textNode, key, leading, trailing });
  }

  const localizedAria = [...document.querySelectorAll('[aria-label]')].map((element) => ({
    element,
    source: element.getAttribute('aria-label')
  }));

  let language = readSetting('hiitun-site-language', 'zh');
  let theme = readSetting('hiitun-site-theme', root.dataset.theme || 'dark');
  if (language !== 'en') language = 'zh';
  if (theme !== 'light') theme = 'dark';

  body.classList.add('has-js');

  function readSetting(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch {
      return fallback;
    }
  }

  function saveSetting(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Keep the controls usable if browser storage is disabled.
    }
  }

  function localized(value) {
    return language === 'en' ? (ariaCopy[value] || value) : value;
  }

  function updateControls() {
    const isDark = theme === 'dark';
    const themeText = language === 'en'
      ? (isDark ? 'Light mode' : 'Dark mode')
      : (isDark ? '白天模式' : '黑夜模式');
    const themeAria = language === 'en'
      ? (isDark ? 'Switch to light mode' : 'Switch to dark mode')
      : (isDark ? '切换到白天模式' : '切换到黑夜模式');
    if (themeLabel) themeLabel.textContent = themeText;
    if (themeIcon) themeIcon.textContent = isDark ? '☼' : '☾';
    if (themeButton) {
      themeButton.setAttribute('aria-label', themeAria);
      themeButton.title = themeAria;
    }
    if (languageLabel) languageLabel.textContent = language === 'zh' ? 'EN' : '中文';
    if (languageButton) {
      const languageAria = language === 'zh' ? '切换到英文' : 'Switch language to Chinese';
      languageButton.setAttribute('aria-label', languageAria);
      languageButton.title = languageAria;
    }
  }

  function setMenuOpen(isOpen) {
    if (!menuButton || !navigation) return;
    navigation.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    const label = isOpen ? '关闭导航菜单' : '打开导航菜单';
    menuButton.setAttribute('aria-label', language === 'en' ? ariaCopy[label] : label);
  }

  function applyTheme(nextTheme, persist = false) {
    theme = nextTheme === 'light' ? 'light' : 'dark';
    root.dataset.theme = theme;
    const color = theme === 'light' ? '#f4f7fb' : '#070b16';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
    document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', theme);
    updateControls();
    if (persist) saveSetting('hiitun-site-theme', theme);
  }

  function applyLanguage(nextLanguage, persist = false) {
    language = nextLanguage === 'en' ? 'en' : 'zh';
    root.lang = language === 'en' ? 'en' : 'zh-CN';
    localizedText.forEach(({ node, key, leading, trailing }) => {
      node.nodeValue = `${leading}${language === 'en' ? copy[key] : key}${trailing}`;
    });
    localizedAria.forEach(({ element, source }) => {
      element.setAttribute('aria-label', localized(source));
    });
    const meta = pageMeta[language];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.ogTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.ogDescription);
    document.querySelectorAll('[data-privacy-link]').forEach((link) => {
      link.setAttribute('href', language === 'en' ? '/privacy-policy-en.html' : '/privacy-policy.html');
    });
    if (menuButton) setMenuOpen(menuButton.getAttribute('aria-expanded') === 'true');
    updateControls();
    if (persist) saveSetting('hiitun-site-language', language);
  }

  applyTheme(theme);
  applyLanguage(language);

  if (themeButton) {
    themeButton.addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark', true));
  }
  if (languageButton) {
    languageButton.addEventListener('click', () => applyLanguage(language === 'zh' ? 'en' : 'zh', true));
  }

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      setMenuOpen(!isOpen);
    });

    navigation.addEventListener('click', (event) => {
      if (event.target instanceof Element && event.target.closest('a')) setMenuOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButton.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (!(event.target instanceof Node)) return;
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) setMenuOpen(false);
    });
  }

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();

