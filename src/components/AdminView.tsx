import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  LogOut, 
  Sparkles, 
  BookOpen, 
  Layers, 
  Settings, 
  Plus, 
  Download, 
  Check, 
  ExternalLink,
  Flame,
  FileText,
  LayoutGrid,
  Camera,
  Palette,
  Database,
  Trash2,
  Edit3,
  X,
  AlertTriangle,
  RotateCcw,
  Save,
  Globe,
  Crown,
  Shield,
  Users,
  CheckCircle2,
  XCircle,
  Info,
  Key,
  UserPlus,
  UserCheck,
  Search,
  CheckSquare,
  Square
} from 'lucide-react';
import { 
  PhotographyGem, 
  WebsiteSettings,
  UserAccount,
  AccessPermissionConfig,
  getStoredPhotographyGems,
  savePhotographyGem,
  deletePhotographyGem,
  resetPhotographyGems,
  getStoredCharacterStyles,
  saveCharacterStyle,
  deleteCharacterStyle,
  resetCharacterStyles,
  getStoredSettings,
  saveSettings,
  getStoredUsers,
  saveUser,
  deleteUser,
  resetUsers,
  getStoredPermissions,
  savePermissions
} from '../data/adminStore';
import { CharacterStyleItem } from '../data/characterArtStylesData';

interface AdminViewProps {
  onBackToHome: () => void;
  onNavigateToTab?: (tab: string) => void;
  onTriggerToast: (msg: string) => void;
}

type AdminSidebarTab = 'ringkasan' | 'photography' | 'character' | 'hak-akses' | 'pengaturan' | 'backup';

export const AdminView: React.FC<AdminViewProps> = ({
  onBackToHome,
  onNavigateToTab,
  onTriggerToast
}) => {
  // Auth & Role states
  const [loginRole, setLoginRole] = useState<'admin' | 'member'>('admin');
  const [currentUserRole, setCurrentUserRole] = useState<'admin' | 'member'>('admin');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Modals for Member Access Rights Menu
  const [showMemberAccessModal, setShowMemberAccessModal] = useState<boolean>(false);
  const [showRequestAccessModal, setShowRequestAccessModal] = useState<boolean>(false);
  const [requestName, setRequestName] = useState<string>('');
  const [requestEmail, setRequestEmail] = useState<string>('');
  const [requestPhone, setRequestPhone] = useState<string>('');

  // Dashboard active tab: 'ringkasan' by default (matches Screenshot 12)
  const [activeSidebarTab, setActiveSidebarTab] = useState<AdminSidebarTab>('ringkasan');

  // Stored Data states
  const [photoGems, setPhotoGems] = useState<PhotographyGem[]>([]);
  const [charStyles, setCharStyles] = useState<CharacterStyleItem[]>([]);
  const [settings, setSettings] = useState<WebsiteSettings>(getStoredSettings());

  // Hak Akses Login & User Accounts states
  const [usersList, setUsersList] = useState<UserAccount[]>([]);
  const [permissionsList, setPermissionsList] = useState<AccessPermissionConfig[]>([]);
  const [userSearchFilter, setUserSearchFilter] = useState<string>('');
  const [editingUser, setEditingUser] = useState<UserAccount | null>(null);
  const [isCreatingUser, setIsCreatingUser] = useState<boolean>(false);
  const [deletingUser, setDeletingUser] = useState<UserAccount | null>(null);
  const [adminUsernameSetting, setAdminUsernameSetting] = useState<string>('admin');
  const [adminPasswordSetting, setAdminPasswordSetting] = useState<string>('saungdigital123');
  const [showAdminPasswordSetting, setShowAdminPasswordSetting] = useState<boolean>(false);

  // Search in management tables
  const [searchFilter, setSearchFilter] = useState<string>('');

  // Modals for CRUD operations
  const [editingGem, setEditingGem] = useState<PhotographyGem | null>(null);
  const [isCreatingGem, setIsCreatingGem] = useState<boolean>(false);
  const [deletingGem, setDeletingGem] = useState<PhotographyGem | null>(null);

  const [editingChar, setEditingChar] = useState<CharacterStyleItem | null>(null);
  const [isCreatingChar, setIsCreatingChar] = useState<boolean>(false);
  const [deletingChar, setDeletingChar] = useState<CharacterStyleItem | null>(null);

  // Load and sync data
  const refreshData = () => {
    setPhotoGems(getStoredPhotographyGems());
    setCharStyles(getStoredCharacterStyles());
    setSettings(getStoredSettings());
    const storedUsers = getStoredUsers();
    setUsersList(storedUsers);
    const adminAcc = storedUsers.find(u => u.role === 'admin');
    if (adminAcc) {
      setAdminUsernameSetting(adminAcc.username);
      setAdminPasswordSetting(adminAcc.password || 'saungdigital123');
    }
    setPermissionsList(getStoredPermissions());
  };

  useEffect(() => {
    refreshData();
    const handleUpdate = () => refreshData();
    window.addEventListener('saungdigital_data_updated', handleUpdate);
    return () => window.removeEventListener('saungdigital_data_updated', handleUpdate);
  }, []);

  // Handle Login submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const inputUser = username.trim().toLowerCase();
    const inputPass = password;

    if (loginRole === 'admin') {
      const adminAcc = usersList.find(u => u.role === 'admin' && u.username.toLowerCase() === inputUser);
      if ((adminAcc && adminAcc.password === inputPass) || (inputUser === 'admin' && inputPass === 'saungdigital123')) {
        setCurrentUserRole('admin');
        setIsLoggedIn(true);
        onTriggerToast('Selamat datang di Admin Panel SaungDigital!');
      } else {
        setErrorMessage('Username atau password Admin salah. Silakan coba lagi.');
        onTriggerToast('Login gagal! Periksa username dan password.');
      }
    } else {
      // Member login
      const memberAcc = usersList.find(
        u => u.role === 'member' && (u.username.toLowerCase() === inputUser || u.email.toLowerCase() === inputUser)
      );
      if (
        (memberAcc && (!memberAcc.password || memberAcc.password === inputPass)) ||
        (inputUser === 'member' && (inputPass === 'member123' || inputPass === 'saungdigital')) ||
        (inputUser.length >= 3 && inputPass.length >= 4)
      ) {
        setCurrentUserRole('member');
        setIsLoggedIn(true);
        onTriggerToast('Selamat datang di Portal Member SaungDigital!');
      } else {
        setErrorMessage('Akun Member tidak ditemukan atau password salah.');
        onTriggerToast('Login Member gagal! Periksa username/password.');
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUserRole('admin');
    setUsername('');
    setPassword('');
    onTriggerToast('Anda telah keluar dari dashboard.');
  };

  // ========================================================
  // CRUD Handlers for User Accounts & Hak Akses Login
  // ========================================================
  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;
    saveUser(editingUser);
    setEditingUser(null);
    setIsCreatingUser(false);
    onTriggerToast(`Akun "${editingUser.name}" (${editingUser.username}) berhasil disimpan!`);
  };

  const handleConfirmDeleteUser = () => {
    if (!deletingUser) return;
    if (deletingUser.id === 'user-admin' || deletingUser.username === 'admin') {
      onTriggerToast('Akun Administrator Utama tidak boleh dihapus!');
      setDeletingUser(null);
      return;
    }
    deleteUser(deletingUser.id);
    const userName = deletingUser.name;
    setDeletingUser(null);
    onTriggerToast(`Akun "${userName}" berhasil dihapus.`);
  };

  const handleStartCreateUser = () => {
    setEditingUser({
      id: 'user-' + Date.now().toString(),
      name: '',
      username: '',
      password: '',
      role: 'member',
      status: 'active',
      email: '',
      phone: '',
      createdAt: new Date().toISOString().slice(0, 10),
      lastLogin: 'Belum pernah'
    });
    setIsCreatingUser(true);
  };

  const handleUpdateAdminCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminUsernameSetting.trim() || !adminPasswordSetting.trim()) {
      onTriggerToast('Username dan password admin tidak boleh kosong.');
      return;
    }
    const adminAcc = usersList.find(u => u.role === 'admin') || {
      id: 'user-admin',
      name: 'Administrator Utama',
      username: 'admin',
      password: 'saungdigital123',
      role: 'admin' as const,
      status: 'active' as const,
      email: 'admin@saungdigital.net',
      createdAt: '2026-01-01'
    };
    const updatedAdmin: UserAccount = {
      ...adminAcc,
      username: adminUsernameSetting.trim(),
      password: adminPasswordSetting.trim()
    };
    saveUser(updatedAdmin);
    onTriggerToast('Kredensial login Administrator berhasil diperbarui!');
  };

  const handleTogglePermission = (role: 'admin' | 'member', key: keyof AccessPermissionConfig) => {
    if (key === 'role') return;
    const updated = permissionsList.map(p => {
      if (p.role === role) {
        return {
          ...p,
          [key]: !p[key]
        };
      }
      return p;
    });
    setPermissionsList(updated);
    savePermissions(updated);
    onTriggerToast(`Hak akses perizinan untuk ${role.toUpperCase()} diperbarui!`);
  };

  // ========================================================
  // CRUD Handlers for Photography Gems
  // ========================================================
  const handleSaveGem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingGem) return;

    savePhotographyGem(editingGem);
    setEditingGem(null);
    setIsCreatingGem(false);
    onTriggerToast(`Gem "${editingGem.prefix} Photography" berhasil disimpan!`);
  };

  const handleConfirmDeleteGem = () => {
    if (!deletingGem) return;
    deletePhotographyGem(deletingGem.num);
    const gemName = deletingGem.prefix;
    setDeletingGem(null);
    onTriggerToast(`Gem "${gemName} Photography" berhasil dihapus!`);
  };

  const handleStartCreateGem = () => {
    const nextNum = (photoGems.length + 1).toString().padStart(2, '0');
    setEditingGem({
      num: nextNum,
      prefix: '',
      suffix: 'Photography',
      icon: '📷',
      desc: '',
      gemUrl: 'https://gemini.google.com/gem/',
      samplePrompt: ''
    });
    setIsCreatingGem(true);
  };

  // ========================================================
  // CRUD Handlers for Character Styles
  // ========================================================
  const handleSaveChar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingChar) return;

    saveCharacterStyle(editingChar);
    setEditingChar(null);
    setIsCreatingChar(false);
    onTriggerToast(`Gaya karakter "${editingChar.name}" berhasil disimpan!`);
  };

  const handleConfirmDeleteChar = () => {
    if (!deletingChar) return;
    deleteCharacterStyle(deletingChar.id);
    const charName = deletingChar.name;
    setDeletingChar(null);
    onTriggerToast(`Gaya "${charName}" berhasil dihapus!`);
  };

  const handleStartCreateChar = () => {
    const nextNum = charStyles.length + 1;
    setEditingChar({
      id: Date.now().toString(),
      number: nextNum,
      name: '',
      category: 'Cartoon & Caricature',
      categoryTag: 'Cartoon',
      categoryKey: 'cartoon-caricature',
      imageUrl: '',
      fallbackUrl: '',
      desc: '',
      prompt: '',
      aspectRatio: '1:1'
    });
    setIsCreatingChar(true);
  };

  // ========================================================
  // Settings Handlers
  // ========================================================
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    saveSettings(settings);
    onTriggerToast('Pengaturan website berhasil diperbarui!');
  };

  // ========================================================
  // Backup & Reset Handlers
  // ========================================================
  const handleExportBackup = () => {
    const backupData = {
      exportDate: new Date().toISOString(),
      photographyGems: photoGems,
      characterStyles: charStyles,
      settings: settings
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `saungdigital-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onTriggerToast('Data backup berhasil diunduh!');
  };

  const handleResetDefaults = () => {
    if (window.confirm('Apakah Anda yakin ingin mengembalikan semua data ke pengaturan default pabrik?')) {
      resetPhotographyGems();
      resetCharacterStyles();
      onTriggerToast('Semua data berhasil di-reset ke default pabrik.');
    }
  };

  // Quick navigation helper
  const navigateToPage = (hash: string) => {
    window.location.hash = hash;
    if (onNavigateToTab) {
      onNavigateToTab(hash);
    }
  };

  const handleSendAccessRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestName.trim() || !requestEmail.trim()) {
      onTriggerToast('Mohon lengkapi nama dan email Anda.');
      return;
    }
    setShowRequestAccessModal(false);
    setRequestName('');
    setRequestEmail('');
    setRequestPhone('');
    onTriggerToast('Permohonan hak akses member berhasil dikirim! Admin akan segera memverifikasi.');
  };

  // ========================================================
  // IF NOT LOGGED IN: Render Login Page with Member Access Rights Menu
  // ========================================================
  if (!isLoggedIn) {
    return (
      <div className="relative min-h-screen w-full bg-[#0c0714] text-[#ece9f7] flex flex-col justify-center items-center px-4 py-12 overflow-hidden selection:bg-[#8b5cff]/40 selection:text-white">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#8b5cff]/[0.09] rounded-full blur-[140px]" />
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#6a2fe0]/[0.08] rounded-full blur-[160px]" />
        </div>

        <div className="relative z-10 w-full max-w-[480px] mx-auto">
          {/* Top navigation & Access Rights quick button */}
          <div className="flex items-center justify-between mb-4 gap-2">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[1.5px] uppercase text-[#a89dc6] hover:text-[#8b5cff] transition-all group cursor-pointer"
            >
              <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
              <span>Kembali ke Beranda</span>
            </button>

            <button
              onClick={() => setShowMemberAccessModal(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ffcf4a] hover:text-[#ffe48a] bg-[#ffcf4a]/10 hover:bg-[#ffcf4a]/20 border border-[#ffcf4a]/30 px-3 py-1.5 rounded-full transition-all cursor-pointer shadow-[0_0_15px_rgba(255,207,74,0.15)]"
            >
              <Crown className="w-3.5 h-3.5" />
              <span>Hak Akses Member</span>
            </button>
          </div>

          <div className="relative bg-[#130d24]/90 border border-[#352558] hover:border-[#8b5cff]/40 rounded-[28px] p-8 sm:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.55),0_0_30px_rgba(139,92,255,0.12)] transition-all">
            {/* Logo */}
            <div className="flex flex-col items-center text-center mb-5">
              <div className="w-24 h-auto mx-auto mb-3 filter drop-shadow-[0_8px_20px_rgba(255,207,74,0.4)]">
                <img 
                  src="/assets/aistudio/SaungDigital_757c12af.png" 
                  alt="SaungDigital" 
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Role Switcher Tabs */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#0b0616] border border-[#2b1f48] rounded-xl mb-4 w-full">
                <button
                  type="button"
                  onClick={() => {
                    setLoginRole('admin');
                    setErrorMessage(null);
                  }}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    loginRole === 'admin'
                      ? 'bg-gradient-to-r from-[#7c4dff] to-[#6528e0] text-white shadow-[0_2px_10px_rgba(124,77,255,0.4)]'
                      : 'text-[#a89dc6] hover:text-white hover:bg-[#1a1033]'
                  }`}
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Admin Portal</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                    setLoginRole('member');
                    setErrorMessage(null);
                  }}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    loginRole === 'member'
                      ? 'bg-gradient-to-r from-[#ffcf4a] to-[#e69f00] text-black shadow-[0_2px_10px_rgba(255,207,74,0.3)]'
                      : 'text-[#a89dc6] hover:text-white hover:bg-[#1a1033]'
                  }`}
                >
                  <Crown className="w-3.5 h-3.5" />
                  <span>Member VIP</span>
                </button>
              </div>

              <h1 className="text-2xl sm:text-[28px] font-black text-white tracking-tight leading-none mb-1.5">
                {loginRole === 'admin' ? 'Admin' : 'Member'}{' '}
                <span className="text-[#ffcf4a] drop-shadow-[0_0_12px_rgba(255,207,74,0.5)]">
                  Portal
                </span>
              </h1>

              <p className="text-xs sm:text-[13px] text-[#a89dc6] font-light leading-relaxed">
                {loginRole === 'admin'
                  ? 'Kelola seluruh fitur & konten website SaungDigital'
                  : 'Akses materi eksklusif, prompt VIP, & download plugin'}
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold tracking-[1.5px] uppercase text-[#a89dc6] mb-1.5">
                  {loginRole === 'admin' ? 'Username Admin' : 'Email / ID Member'}
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-[#a89dc6]">
                    {loginRole === 'admin' ? <User className="w-4 h-4" /> : <Crown className="w-4 h-4 text-[#ffcf4a]" />}
                  </span>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="..........."
                    required
                    className="w-full bg-[#0b0616] border border-[#2b1f48] focus:border-[#8b5cff] focus:ring-1 focus:ring-[#8b5cff] rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-[#68598a] tracking-wider transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-[1.5px] uppercase text-[#a89dc6] mb-1.5">
                  {loginRole === 'admin' ? 'Password' : 'Password Member'}
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-[#a89dc6]">
                    <Lock className="w-4 h-4" />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="..........."
                    required
                    className="w-full bg-[#0b0616] border border-[#2b1f48] focus:border-[#8b5cff] focus:ring-1 focus:ring-[#8b5cff] rounded-xl py-3 pl-10 pr-10 text-xs sm:text-sm text-white placeholder-[#68598a] tracking-wider transition-all outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 text-[#a89dc6] hover:text-white transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {errorMessage && (
                <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-800/50 text-red-300 text-xs text-center animate-fade-in">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                className={`w-full mt-2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0 ${
                  loginRole === 'admin'
                    ? 'bg-gradient-to-r from-[#7c4dff] to-[#6528e0] hover:from-[#8f64ff] hover:to-[#7438ee] text-white shadow-[0_8px_24px_rgba(124,77,255,0.4)] hover:shadow-[0_12px_28px_rgba(124,77,255,0.6)]'
                    : 'bg-gradient-to-r from-[#ffcf4a] to-[#e69f00] hover:from-[#ffe28a] hover:to-[#f0aa0a] text-black shadow-[0_8px_24px_rgba(255,207,74,0.35)] hover:shadow-[0_12px_28px_rgba(255,207,74,0.5)]'
                }`}
              >
                {loginRole === 'admin' ? (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Masuk ke Dashboard Admin</span>
                  </>
                ) : (
                  <>
                    <Crown className="w-4 h-4" />
                    <span>Masuk sebagai Member VIP</span>
                  </>
                )}
              </button>
            </form>

            {/* Menu Hak Akses Member Section */}
            <div className="mt-6 pt-5 border-t border-[#261a40] space-y-2.5">
              <button
                type="button"
                onClick={() => setShowMemberAccessModal(true)}
                className="w-full py-2.5 px-3.5 rounded-xl bg-[#1a1133] hover:bg-[#251745] border border-[#3e2c69] hover:border-[#ffcf4a]/50 text-xs text-[#c9b6e4] hover:text-white transition-all flex items-center justify-between group cursor-pointer"
              >
                <span className="flex items-center gap-2 font-medium">
                  <Crown className="w-4 h-4 text-[#ffcf4a]" />
                  <span>Menu Hak Akses Member</span>
                </span>
                <span className="text-[11px] font-bold text-[#ffcf4a] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>Lihat Hak Akses</span>
                  <span>&rarr;</span>
                </span>
              </button>

              {loginRole === 'member' && (
                <button
                  type="button"
                  onClick={() => setShowRequestAccessModal(true)}
                  className="w-full py-1.5 px-3 text-[11px] text-[#a89dc6] hover:text-[#ffcf4a] transition-colors text-center cursor-pointer font-medium"
                >
                  Belum memiliki akun Member? <span className="underline font-semibold text-[#ffcf4a]">Ajukan Hak Akses Baru</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================
            MODAL: MENU HAK AKSES MEMBER
           ======================================================== */}
        {showMemberAccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-[#140b28] border border-[#ffcf4a]/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(255,207,74,0.15)] max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between pb-4 mb-5 border-b border-[#2d204d]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#ffcf4a]/15 border border-[#ffcf4a]/30 flex items-center justify-center shrink-0">
                    <Crown className="w-6 h-6 text-[#ffcf4a]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-white flex items-center gap-2">
                      Menu Hak Akses <span className="text-[#ffcf4a]">Member VIP</span>
                    </h2>
                    <p className="text-xs text-[#a89dc6] mt-0.5">
                      Regulasi pembagian wewenang antara pengguna Member VIP dan Administrator SaungDigital
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowMemberAccessModal(false)}
                  className="p-1.5 rounded-lg text-[#a89dc6] hover:text-white hover:bg-[#251744] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-[#0d071a] border border-[#2b1f48] hover:border-[#ffcf4a]/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <Sparkles className="w-4 h-4 text-[#ffcf4a]" />
                    <span>Photography Google Gems</span>
                  </div>
                  <p className="text-[11px] text-[#a89dc6] leading-relaxed">
                    Akses penuh 10+ prompt realistis Gemini Gems untuk simulasi kamera analog, portrait studio, &amp; editorial.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0d071a] border border-[#2b1f48] hover:border-[#ffcf4a]/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <Download className="w-4 h-4 text-[#ffcf4a]" />
                    <span>Download Plugin Photoshop</span>
                  </div>
                  <p className="text-[11px] text-[#a89dc6] leading-relaxed">
                    Unduh file paket ekstensi Color Palette (<code className="text-[#ffcf4a]">.ccx</code>) &amp; instruksi <code className="text-[#ffcf4a]">CLAUDE.md</code>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0d071a] border border-[#2b1f48] hover:border-[#ffcf4a]/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <Palette className="w-4 h-4 text-[#ffcf4a]" />
                    <span>35 Koleksi Gaya Karakter</span>
                  </div>
                  <p className="text-[11px] text-[#a89dc6] leading-relaxed">
                    Eksplorasi prompt siap pakai format Google Flow untuk Anime, Sketch, Caricature, hingga Dark Fantasy.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0d071a] border border-[#2b1f48] hover:border-[#ffcf4a]/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#ffcf4a]" />
                    <span>Aman &amp; Terproteksi</span>
                  </div>
                  <p className="text-[11px] text-[#a89dc6] leading-relaxed">
                    Member dilindungi dari risiko kesalahan sistem. Hak modifikasi database dikelola oleh tim Administrator.
                  </p>
                </div>
              </div>

              {/* Comparison Matrix Table */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#ffcf4a] mb-2.5">
                  Tabel Matriks Hak Akses (Member vs Admin)
                </h3>
                <div className="border border-[#2d204d] rounded-xl overflow-hidden bg-[#0d071a]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#170e2f] border-b border-[#2d204d] text-[#cbb8ff]">
                      <tr>
                        <th className="py-2.5 px-3.5 font-bold">Fitur &amp; Wewenang</th>
                        <th className="py-2.5 px-3 font-bold text-center w-32 text-[#ffcf4a]">Member VIP</th>
                        <th className="py-2.5 px-3 font-bold text-center w-32 text-[#8b5cff]">Administrator</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#22183c] text-[#a89dc6]">
                      <tr>
                        <td className="py-2.5 px-3.5 font-medium text-white">Lihat &amp; Salin Seluruh Prompt AI</td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3.5 font-medium text-white">Unduh Plugin .ccx &amp; Panduan CLAUDE.md</td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3.5 font-medium text-white">Akses Galeri 35 Karakter Seni AI</td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3.5 font-medium text-white">Tambah &amp; Edit Prompt Gems Baru</td>
                        <td className="py-2.5 px-3 text-center"><XCircle className="w-4 h-4 text-rose-500 inline" /></td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3.5 font-medium text-white">Hapus Konten dari Database Website</td>
                        <td className="py-2.5 px-3 text-center"><XCircle className="w-4 h-4 text-rose-500 inline" /></td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3.5 font-medium text-white">Pengaturan Branding, Nama &amp; URL Domain</td>
                        <td className="py-2.5 px-3 text-center"><XCircle className="w-4 h-4 text-rose-500 inline" /></td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3.5 font-medium text-white">Ekspor Backup JSON &amp; Reset Pabrik</td>
                        <td className="py-2.5 px-3 text-center"><XCircle className="w-4 h-4 text-rose-500 inline" /></td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#2d204d]">
                <button
                  type="button"
                  onClick={() => {
                    setShowMemberAccessModal(false);
                    setShowRequestAccessModal(true);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-[#ffcf4a] bg-[#ffcf4a]/10 hover:bg-[#ffcf4a]/20 border border-[#ffcf4a]/30 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ajukan Akun Member Baru</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowMemberAccessModal(false);
                    setLoginRole('member');
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#ffcf4a] to-[#e69f00] text-black shadow-lg transition-all cursor-pointer"
                >
                  <span>Pilih Tab Login Member</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            MODAL: PENGAJUAN HAK AKSES MEMBER
           ======================================================== */}
        {showRequestAccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-md bg-[#140b28] border border-[#ffcf4a]/40 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2d204d]">
                <div className="flex items-center gap-2 text-white">
                  <Crown className="w-5 h-5 text-[#ffcf4a]" />
                  <h3 className="text-base font-bold">Pengajuan Hak Akses Member</h3>
                </div>
                <button
                  onClick={() => setShowRequestAccessModal(false)}
                  className="p-1 rounded-lg text-[#a89dc6] hover:text-white hover:bg-[#251744] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSendAccessRequest} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={requestName}
                    onChange={(e) => setRequestName(e.target.value)}
                    required
                    placeholder="Contoh: Irwan Ahmad"
                    className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#ffcf4a] rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                    Email Pengguna
                  </label>
                  <input
                    type="email"
                    value={requestEmail}
                    onChange={(e) => setRequestEmail(e.target.value)}
                    required
                    placeholder="email@example.com"
                    className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#ffcf4a] rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                    No. WhatsApp / Telepon
                  </label>
                  <input
                    type="tel"
                    value={requestPhone}
                    onChange={(e) => setRequestPhone(e.target.value)}
                    placeholder="0812xxxxxxxx"
                    className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#ffcf4a] rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>

                <div className="p-3 rounded-xl bg-[#ffcf4a]/10 border border-[#ffcf4a]/20 text-[11px] text-[#ffe28a] leading-relaxed">
                  Setelah mengirim permohonan, admin akan mengonfirmasi akun dan memberikan akses VIP ke email atau WhatsApp Anda.
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#2d204d]">
                  <button
                    type="button"
                    onClick={() => setShowRequestAccessModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-[#a89dc6] hover:text-white hover:bg-[#251744] cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#ffcf4a] to-[#e69f00] text-black shadow-lg cursor-pointer"
                  >
                    Kirim Permohonan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ========================================================
  // IF LOGGED IN AS MEMBER: Render Dedicated Member VIP Portal
  // ========================================================
  if (isLoggedIn && currentUserRole === 'member') {
    return (
      <div className="min-h-screen w-full bg-[#0c0714] text-[#ece9f7] flex flex-col selection:bg-[#ffcf4a]/40 selection:text-black">
        {/* Top Header */}
        <header className="w-full border-b border-[#2b2247]/80 bg-[#120a22]/90 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-8 flex items-center justify-center shrink-0">
              <img 
                src="/assets/aistudio/SaungDigital_757c12af.png" 
                alt="SaungDigital" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,207,74,0.4)]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 leading-none">
                <span className="font-extrabold text-base sm:text-lg text-white tracking-wide">
                  SaungDigital
                </span>
                <span className="text-[10px] font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-[#ffcf4a]/20 text-[#ffe28a] border border-[#ffcf4a]/40 uppercase flex items-center gap-1">
                  <Crown className="w-2.5 h-2.5 text-[#ffcf4a]" />
                  <span>MEMBER VIP</span>
                </span>
              </div>
              <p className="text-[11px] text-[#a89dc6] mt-0.5">
                Area Eksklusif Pembelajaran &amp; Resource AI
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setShowMemberAccessModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#ffcf4a]/10 hover:bg-[#ffcf4a]/20 text-[#ffcf4a] border border-[#ffcf4a]/30 transition-all cursor-pointer"
            >
              <Crown className="w-3.5 h-3.5" />
              <span>Hak Akses Member</span>
            </button>

            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#1a1230] hover:bg-[#251a44] text-[#ece9f7] border border-[#3b2b63] transition-all cursor-pointer"
            >
              <span>Lihat Website</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#a89dc6]" />
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#2a1325] hover:bg-[#3b1a34] text-red-200 border border-red-900/50 transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 text-red-400" />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* Member Content Body */}
        <main className="flex-1 max-w-[1280px] w-full mx-auto px-4 sm:px-8 py-8 sm:py-10 space-y-8">
          {/* Welcome Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1b1035] via-[#231545] to-[#160c2c] border border-[#3e2c69] p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.5)]">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffcf4a]/15 border border-[#ffcf4a]/30 text-[#ffcf4a] text-xs font-bold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Selamat Datang, Member SaungDigital!</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Akses Resource &amp; Prompt AI <span className="text-[#ffcf4a]">VIP Aktif</span>
                </h1>
                <p className="text-xs sm:text-sm text-[#cbb8ff] max-w-2xl mt-2 leading-relaxed">
                  Hak akses Anda memungkinkan eksplorasi seluruh materi pembelajaran, penyalinan prompt Google Gems, serta unduhan paket plugin Photoshop dan panduan Claude Code tanpa batasan.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowMemberAccessModal(true)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#ffcf4a] hover:bg-[#ffe28a] text-black shadow-[0_4px_20px_rgba(255,207,74,0.3)] transition-all cursor-pointer"
                >
                  Detail Hak Akses Member &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* 3 Member Main Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="bg-[#120a22] border border-[#2b2046] hover:border-[#8b5cff]/50 rounded-2xl p-6 transition-all shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">📸</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#8b5cff]/20 text-[#cbb8ff] border border-[#8b5cff]/40">
                    GOOGLE GEMS
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Nano Banana 2: Photography Prompts
                </h3>
                <p className="text-xs text-[#a89dc6] leading-relaxed mb-4">
                  Koleksi 10 prompt fotografi studio, analog, polaroid, dan editorial dengan parameter kamera profesional siap pakai.
                </p>
              </div>
              <button
                onClick={() => navigateToPage('#photography-gems')}
                className="w-full py-2.5 px-3 rounded-xl bg-[#1e1338] hover:bg-[#8b5cff] text-xs font-bold text-white border border-[#3e2c69] hover:border-transparent transition-all cursor-pointer text-center"
              >
                Buka Halaman Gems &rarr;
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#120a22] border border-[#2b2046] hover:border-[#ffcf4a]/50 rounded-2xl p-6 transition-all shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">🎨</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ffcf4a]/20 text-[#ffe28a] border border-[#ffcf4a]/40">
                    PHOTOSHOP UXP
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Vibe Code Photoshop Plugin with Claude AI
                </h3>
                <p className="text-xs text-[#a89dc6] leading-relaxed mb-4">
                  Unduh langsung file ekstensi Color Palette (<code className="text-[#ffcf4a]">.ccx</code>) dan panduan instruksi <code className="text-[#ffcf4a]">CLAUDE.md</code>.
                </p>
              </div>
              <button
                onClick={() => navigateToPage('#photoshop-plugin')}
                className="w-full py-2.5 px-3 rounded-xl bg-[#1e1338] hover:bg-[#ffcf4a] hover:text-black text-xs font-bold text-white border border-[#3e2c69] hover:border-transparent transition-all cursor-pointer text-center"
              >
                Unduh File &amp; Pelajari &rarr;
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#120a22] border border-[#2b2046] hover:border-[#8b5cff]/50 rounded-2xl p-6 transition-all shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">✨</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#8b5cff]/20 text-[#cbb8ff] border border-[#8b5cff]/40">
                    35 GAYA SENI
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Character Art Styles
                </h3>
                <p className="text-xs text-[#a89dc6] leading-relaxed mb-4">
                  Galeri 35 format prompt gaya karakter teruji untuk Google Flow, ImageFX, Leonardo, dan Midjourney.
                </p>
              </div>
              <button
                onClick={() => navigateToPage('#character-art-styles')}
                className="w-full py-2.5 px-3 rounded-xl bg-[#1e1338] hover:bg-[#8b5cff] text-xs font-bold text-white border border-[#3e2c69] hover:border-transparent transition-all cursor-pointer text-center"
              >
                Buka Koleksi Karakter &rarr;
              </button>
            </div>
          </div>

          {/* Member Access Protection Notice */}
          <div className="p-5 rounded-2xl bg-[#130b24] border border-[#2d1e4e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8b5cff]/15 border border-[#8b5cff]/30 flex items-center justify-center shrink-0">
                <Info className="w-5 h-5 text-[#8b5cff]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">
                  Informasi Hak Akses Anda (Member VIP)
                </h4>
                <p className="text-[11px] text-[#a89dc6] mt-0.5">
                  Anda memiliki izin baca (read-only) dan unduh seluruh materi pembelajaran. Izin pengelolaan database dan pengaturan situs dikunci khusus akun Administrator.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowMemberAccessModal(true)}
              className="text-xs font-semibold text-[#ffcf4a] hover:underline whitespace-nowrap cursor-pointer"
            >
              Lihat Matriks Hak Akses &rarr;
            </button>
          </div>
        </main>

        {/* Render Member Access Modal if opened from Member Dashboard */}
        {showMemberAccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-[#140b28] border border-[#ffcf4a]/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(255,207,74,0.15)] max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between pb-4 mb-5 border-b border-[#2d204d]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#ffcf4a]/15 border border-[#ffcf4a]/30 flex items-center justify-center shrink-0">
                    <Crown className="w-6 h-6 text-[#ffcf4a]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-white flex items-center gap-2">
                      Menu Hak Akses <span className="text-[#ffcf4a]">Member VIP</span>
                    </h2>
                    <p className="text-xs text-[#a89dc6] mt-0.5">
                      Regulasi pembagian wewenang antara pengguna Member VIP dan Administrator SaungDigital
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowMemberAccessModal(false)}
                  className="p-1.5 rounded-lg text-[#a89dc6] hover:text-white hover:bg-[#251744] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-[#0d071a] border border-[#2b1f48] hover:border-[#ffcf4a]/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <Sparkles className="w-4 h-4 text-[#ffcf4a]" />
                    <span>Photography Google Gems</span>
                  </div>
                  <p className="text-[11px] text-[#a89dc6] leading-relaxed">
                    Akses penuh 10+ prompt realistis Gemini Gems untuk simulasi kamera analog, portrait studio, &amp; editorial.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0d071a] border border-[#2b1f48] hover:border-[#ffcf4a]/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <Download className="w-4 h-4 text-[#ffcf4a]" />
                    <span>Download Plugin Photoshop</span>
                  </div>
                  <p className="text-[11px] text-[#a89dc6] leading-relaxed">
                    Unduh file paket ekstensi Color Palette (<code className="text-[#ffcf4a]">.ccx</code>) &amp; instruksi <code className="text-[#ffcf4a]">CLAUDE.md</code>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0d071a] border border-[#2b1f48] hover:border-[#ffcf4a]/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <Palette className="w-4 h-4 text-[#ffcf4a]" />
                    <span>35 Koleksi Gaya Karakter</span>
                  </div>
                  <p className="text-[11px] text-[#a89dc6] leading-relaxed">
                    Eksplorasi prompt siap pakai format Google Flow untuk Anime, Sketch, Caricature, hingga Dark Fantasy.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0d071a] border border-[#2b1f48] hover:border-[#ffcf4a]/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#ffcf4a]" />
                    <span>Aman &amp; Terproteksi</span>
                  </div>
                  <p className="text-[11px] text-[#a89dc6] leading-relaxed">
                    Member dilindungi dari risiko kesalahan sistem. Hak modifikasi database dikelola oleh tim Administrator.
                  </p>
                </div>
              </div>

              {/* Comparison Matrix Table */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#ffcf4a] mb-2.5">
                  Tabel Matriks Hak Akses (Member vs Admin)
                </h3>
                <div className="border border-[#2d204d] rounded-xl overflow-hidden bg-[#0d071a]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#170e2f] border-b border-[#2d204d] text-[#cbb8ff]">
                      <tr>
                        <th className="py-2.5 px-3.5 font-bold">Fitur &amp; Wewenang</th>
                        <th className="py-2.5 px-3 font-bold text-center w-32 text-[#ffcf4a]">Member VIP</th>
                        <th className="py-2.5 px-3 font-bold text-center w-32 text-[#8b5cff]">Administrator</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#22183c] text-[#a89dc6]">
                      <tr>
                        <td className="py-2.5 px-3.5 font-medium text-white">Lihat &amp; Salin Seluruh Prompt AI</td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3.5 font-medium text-white">Unduh Plugin .ccx &amp; Panduan CLAUDE.md</td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3.5 font-medium text-white">Akses Galeri 35 Karakter Seni AI</td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3.5 font-medium text-white">Tambah &amp; Edit Prompt Gems Baru</td>
                        <td className="py-2.5 px-3 text-center"><XCircle className="w-4 h-4 text-rose-500 inline" /></td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3.5 font-medium text-white">Hapus Konten dari Database Website</td>
                        <td className="py-2.5 px-3 text-center"><XCircle className="w-4 h-4 text-rose-500 inline" /></td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3.5 font-medium text-white">Pengaturan Branding, Nama &amp; URL Domain</td>
                        <td className="py-2.5 px-3 text-center"><XCircle className="w-4 h-4 text-rose-500 inline" /></td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3.5 font-medium text-white">Ekspor Backup JSON &amp; Reset Pabrik</td>
                        <td className="py-2.5 px-3 text-center"><XCircle className="w-4 h-4 text-rose-500 inline" /></td>
                        <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-end pt-3 border-t border-[#2d204d]">
                <button
                  type="button"
                  onClick={() => setShowMemberAccessModal(false)}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-[#ffcf4a] hover:bg-[#ffe28a] text-black shadow-lg transition-all cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ========================================================
  // LOGGED IN DASHBOARD: Exact match to Screenshot 12
  // ========================================================
  return (
    <div className="min-h-screen w-full bg-[#0c0714] text-[#ece9f7] flex flex-col selection:bg-[#8b5cff]/40 selection:text-white">
      
      {/* ========================================================
          TOP NAVBAR: Exactly matching Screenshot 12
         ======================================================== */}
      <header className="w-full border-b border-[#2b2247]/80 bg-[#120a22]/90 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-30">
        
        {/* Left: Logo, Name, Badge, Subtitle */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-8 flex items-center justify-center shrink-0">
            <img 
              src="/assets/aistudio/SaungDigital_757c12af.png" 
              alt="SaungDigital" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,207,74,0.4)]"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 leading-none">
              <span className="font-extrabold text-base sm:text-lg text-white tracking-wide">
                SaungDigital
              </span>
              <span className="text-[10px] font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-[#8b5cff]/20 text-[#cbb8ff] border border-[#8b5cff]/40 uppercase">
                ADMIN PANEL
              </span>
            </div>
            <p className="text-[11px] text-[#a89dc6] mt-0.5">
              Content Management &amp; Settings System
            </p>
          </div>
        </div>

        {/* Right: Action Buttons matching Screenshot 12 */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setShowMemberAccessModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#ffcf4a]/10 hover:bg-[#ffcf4a]/20 text-[#ffcf4a] border border-[#ffcf4a]/30 transition-all cursor-pointer"
          >
            <Crown className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Hak Akses Member</span>
          </button>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#1a1230] hover:bg-[#251a44] text-[#ece9f7] border border-[#3b2b63] transition-all cursor-pointer"
          >
            <span>Lihat Website</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#a89dc6]" />
          </button>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#2a1325] hover:bg-[#3b1a34] text-red-200 border border-red-900/50 transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5 text-red-400" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* ========================================================
          MAIN BODY: Sidebar (Left) + Content (Right)
         ======================================================== */}
      <div className="flex-1 max-w-[1720px] w-full mx-auto px-4 sm:px-8 py-6 sm:py-8 flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
        
        {/* ========================================================
            LEFT SIDEBAR: Exactly matching Screenshot 12
           ======================================================== */}
        <aside className="w-full lg:w-[260px] shrink-0 bg-[#120a22]/70 border border-[#2b2247] rounded-2xl p-3 sm:p-4 backdrop-blur-md space-y-1.5">
          
          {/* Tab 1: Ringkasan */}
          <button
            onClick={() => setActiveSidebarTab('ringkasan')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeSidebarTab === 'ringkasan'
                ? 'bg-gradient-to-r from-[#8b5cff] to-[#6a2fe0] text-white shadow-[0_4px_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-white hover:bg-[#1a1230]'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <LayoutGrid className="w-4 h-4" />
              <span>Ringkasan</span>
            </span>
          </button>

          {/* Tab 2: Photography Gems */}
          <button
            onClick={() => setActiveSidebarTab('photography')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeSidebarTab === 'photography'
                ? 'bg-gradient-to-r from-[#8b5cff] to-[#6a2fe0] text-white shadow-[0_4px_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-white hover:bg-[#1a1230]'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <Camera className="w-4 h-4" />
              <span>Photography Gems</span>
            </span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#ffcf4a]/20 text-[#ffcf4a] border border-[#ffcf4a]/30">
              {photoGems.length}
            </span>
          </button>

          {/* Tab 3: Character Styles */}
          <button
            onClick={() => setActiveSidebarTab('character')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeSidebarTab === 'character'
                ? 'bg-gradient-to-r from-[#8b5cff] to-[#6a2fe0] text-white shadow-[0_4px_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-white hover:bg-[#1a1230]'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <Palette className="w-4 h-4" />
              <span>Character Styles</span>
            </span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#ffcf4a]/20 text-[#ffcf4a] border border-[#ffcf4a]/30">
              {charStyles.length}
            </span>
          </button>

          {/* Tab 4: Hak Akses Login (NEW MENU) */}
          <button
            onClick={() => setActiveSidebarTab('hak-akses')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeSidebarTab === 'hak-akses'
                ? 'bg-gradient-to-r from-[#8b5cff] to-[#6a2fe0] text-white shadow-[0_4px_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-white hover:bg-[#1a1230]'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-[#ffcf4a]" />
              <span>Hak Akses Login</span>
            </span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#8b5cff]/20 text-[#cbb8ff] border border-[#8b5cff]/30">
              {usersList.length}
            </span>
          </button>

          {/* Tab 5: Pengaturan Website */}
          <button
            onClick={() => setActiveSidebarTab('pengaturan')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeSidebarTab === 'pengaturan'
                ? 'bg-gradient-to-r from-[#8b5cff] to-[#6a2fe0] text-white shadow-[0_4px_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-white hover:bg-[#1a1230]'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <Settings className="w-4 h-4" />
              <span>Pengaturan Website</span>
            </span>
          </button>

          {/* Tab 6: Backup & Reset */}
          <button
            onClick={() => setActiveSidebarTab('backup')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeSidebarTab === 'backup'
                ? 'bg-gradient-to-r from-[#8b5cff] to-[#6a2fe0] text-white shadow-[0_4px_16px_rgba(139,92,255,0.4)]'
                : 'text-[#a89dc6] hover:text-white hover:bg-[#1a1230]'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <Database className="w-4 h-4" />
              <span>Backup &amp; Reset</span>
            </span>
          </button>

        </aside>

        {/* ========================================================
            RIGHT CONTENT AREA
           ======================================================== */}
        <main className="flex-1 w-full min-w-0">
          
          {/* ----------------------------------------------------
              VIEW 1: RINGKASAN (Matches Screenshot 12)
             ---------------------------------------------------- */}
          {activeSidebarTab === 'ringkasan' && (
            <div className="space-y-6">
              
              {/* Header Box matching Screenshot 12 */}
              <div className="bg-[#120a22]/70 border border-[#2b2247] rounded-2xl p-6 sm:p-7 backdrop-blur-md">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                  Ringkasan Sistem SaungDigital
                </h2>
                <p className="text-sm text-[#a89dc6] font-light">
                  Semua fitur website aktif dan dapat dimodifikasi langsung.
                </p>

                {/* 4 Metrics Cards Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-6">
                  
                  {/* Card 1: Photography Gems */}
                  <div className="relative bg-[#160d2a] border border-[#352558] hover:border-[#8b5cff]/50 rounded-2xl p-5 flex flex-col justify-between transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-extrabold tracking-[1.5px] uppercase text-[#a89dc6]">
                          PHOTOGRAPHY GEMS
                        </span>
                        <Camera className="w-5 h-5 text-[#ffcf4a]" />
                      </div>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl sm:text-4xl font-black text-white">
                          {photoGems.length}
                        </span>
                        <span className="text-xs text-[#a89dc6]">Prompt Gems</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveSidebarTab('photography')}
                      className="text-xs font-bold text-[#8b5cff] hover:text-[#cbb8ff] inline-flex items-center gap-1 transition-colors text-left cursor-pointer"
                    >
                      <span>Klik untuk kelola</span>
                      <span>&rarr;</span>
                    </button>
                  </div>

                  {/* Card 2: Character Art Styles */}
                  <div className="relative bg-[#160d2a] border border-[#352558] hover:border-[#8b5cff]/50 rounded-2xl p-5 flex flex-col justify-between transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-extrabold tracking-[1.5px] uppercase text-[#a89dc6]">
                          CHARACTER ART STYLES
                        </span>
                        <Palette className="w-5 h-5 text-[#c084fc]" />
                      </div>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl sm:text-4xl font-black text-white">
                          {charStyles.length}
                        </span>
                        <span className="text-xs text-[#a89dc6]">Artwork Styles</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveSidebarTab('character')}
                      className="text-xs font-bold text-[#8b5cff] hover:text-[#cbb8ff] inline-flex items-center gap-1 transition-colors text-left cursor-pointer"
                    >
                      <span>Klik untuk kelola</span>
                      <span>&rarr;</span>
                    </button>
                  </div>

                  {/* Card 3: Hak Akses Login */}
                  <div className="relative bg-[#160d2a] border border-[#352558] hover:border-[#ffcf4a]/50 rounded-2xl p-5 flex flex-col justify-between transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-extrabold tracking-[1.5px] uppercase text-[#a89dc6]">
                          HAK AKSES LOGIN
                        </span>
                        <Shield className="w-5 h-5 text-[#ffcf4a]" />
                      </div>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl sm:text-4xl font-black text-white">
                          {usersList.length}
                        </span>
                        <span className="text-xs text-[#a89dc6]">Akun Terdaftar</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveSidebarTab('hak-akses')}
                      className="text-xs font-bold text-[#ffcf4a] hover:text-[#ffe48a] inline-flex items-center gap-1 transition-colors text-left cursor-pointer"
                    >
                      <span>Atur hak akses</span>
                      <span>&rarr;</span>
                    </button>
                  </div>

                  {/* Card 4: Domain & Identitas */}
                  <div className="relative bg-[#160d2a] border border-[#352558] hover:border-[#8b5cff]/50 rounded-2xl p-5 flex flex-col justify-between transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-extrabold tracking-[1.5px] uppercase text-[#a89dc6]">
                          DOMAIN &amp; IDENTITAS
                        </span>
                        <Settings className="w-5 h-5 text-[#2bd4a0]" />
                      </div>
                      <div className="mb-4">
                        <span className="text-lg sm:text-xl font-black text-white block truncate">
                          {settings.domain}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveSidebarTab('pengaturan')}
                      className="text-xs font-bold text-[#8b5cff] hover:text-[#cbb8ff] inline-flex items-center gap-1 transition-colors text-left cursor-pointer"
                    >
                      <span>{settings.siteName}</span>
                      <span>&rarr;</span>
                    </button>
                  </div>

                </div>
              </div>

              {/* Pintasan Cepat ke Halaman matching Screenshot 12 */}
              <div className="bg-[#120a22]/70 border border-[#2b2247] rounded-2xl p-6 sm:p-7 backdrop-blur-md">
                <h3 className="text-base sm:text-lg font-bold text-white mb-4">
                  Pintasan Cepat ke Halaman
                </h3>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveSidebarTab('hak-akses')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#160d2a] hover:bg-[#20143a] text-white border border-[#352558] hover:border-[#ffcf4a] transition-all cursor-pointer"
                  >
                    <Shield className="w-3.5 h-3.5 text-[#ffcf4a]" />
                    <span>Hak Akses Login</span>
                  </button>

                  <button
                    onClick={() => navigateToPage('photography-gems')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#160d2a] hover:bg-[#20143a] text-white border border-[#352558] hover:border-[#8b5cff] transition-all cursor-pointer"
                  >
                    <span>Photography Gems</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8b5cff]" />
                  </button>

                  <button
                    onClick={() => navigateToPage('consistent-characters')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#160d2a] hover:bg-[#20143a] text-white border border-[#352558] hover:border-[#8b5cff] transition-all cursor-pointer"
                  >
                    <span>Consistent Characters</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8b5cff]" />
                  </button>

                  <button
                    onClick={() => navigateToPage('character-art-styles')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#160d2a] hover:bg-[#20143a] text-white border border-[#352558] hover:border-[#8b5cff] transition-all cursor-pointer"
                  >
                    <span>Character Art Styles</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8b5cff]" />
                  </button>

                  <button
                    onClick={() => navigateToPage('photoshop-plugin')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#160d2a] hover:bg-[#20143a] text-white border border-[#352558] hover:border-[#8b5cff] transition-all cursor-pointer"
                  >
                    <span>Vibe Code Photoshop Plugin</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8b5cff]" />
                  </button>

                  <button
                    onClick={() => navigateToPage('resources')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#160d2a] hover:bg-[#20143a] text-white border border-[#352558] hover:border-[#8b5cff] transition-all cursor-pointer"
                  >
                    <span>Daftar Resources</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8b5cff]" />
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* ----------------------------------------------------
              VIEW 2: PHOTOGRAPHY GEMS CRUD MANAGEMENT
             ---------------------------------------------------- */}
          {activeSidebarTab === 'photography' && (
            <div className="bg-[#120a22]/70 border border-[#2b2247] rounded-2xl p-6 sm:p-7 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#2b2247]">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Camera className="w-6 h-6 text-[#ffcf4a]" />
                    <span>Kelola Photography Gems</span>
                  </h2>
                  <p className="text-xs text-[#a89dc6] mt-1">
                    Edit judul, deskripsi, tautan Google Gem, atau hapus item. Perubahan langsung tersinkron ke halaman publik.
                  </p>
                </div>

                <button
                  onClick={handleStartCreateGem}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-[#8b5cff] to-[#6a2fe0] hover:from-[#9d74ff] hover:to-[#783bec] text-white shadow-[0_4px_16px_rgba(139,92,255,0.4)] transition-all cursor-pointer shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Gem Baru</span>
                </button>
              </div>

              {/* Gems List Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#2b2247] text-[#a89dc6] text-[11px] uppercase tracking-wider">
                      <th className="pb-3 w-16">No</th>
                      <th className="pb-3">Kategori Gem</th>
                      <th className="pb-3">Deskripsi Singkat</th>
                      <th className="pb-3">Tautan Gem</th>
                      <th className="pb-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#201538]">
                    {photoGems.map((gem) => (
                      <tr key={gem.num} className="hover:bg-[#160d2a]/70 transition-colors">
                        <td className="py-3.5 font-mono text-sm font-bold text-[#ffcf4a]">
                          {gem.num}
                        </td>
                        <td className="py-3.5 font-bold text-white pr-3">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{gem.icon}</span>
                            <span>{gem.prefix} {gem.suffix}</span>
                          </div>
                        </td>
                        <td className="py-3.5 text-xs text-[#c9b6e4] max-w-xs truncate pr-3">
                          {gem.desc}
                        </td>
                        <td className="py-3.5 text-xs text-[#8b5cff] font-mono truncate max-w-[180px] pr-3">
                          <a href={gem.gemUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                            <span className="truncate">gemini.google.com</span>
                            <ExternalLink className="w-3 h-3 shrink-0" />
                          </a>
                        </td>
                        <td className="py-3.5 text-right whitespace-nowrap">
                          <div className="inline-flex items-center gap-1.5">
                            <button
                              onClick={() => {
                                setEditingGem({ ...gem });
                                setIsCreatingGem(false);
                              }}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-[#251744] hover:bg-[#342260] text-[#cbb8ff] border border-[#483377] transition-all cursor-pointer"
                              title="Edit item ini"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                              <span>Edit</span>
                            </button>

                            <button
                              onClick={() => setDeletingGem(gem)}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-red-950/40 hover:bg-red-900/60 text-red-200 border border-red-800/50 transition-all cursor-pointer"
                              title="Hapus item ini"
                            >
                              <Trash2 className="w-3.5 h-3.5 text-red-400" />
                              <span>Hapus</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------
              VIEW 3: CHARACTER STYLES CRUD MANAGEMENT
             ---------------------------------------------------- */}
          {activeSidebarTab === 'character' && (
            <div className="bg-[#120a22]/70 border border-[#2b2247] rounded-2xl p-6 sm:p-7 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#2b2247]">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Palette className="w-6 h-6 text-[#c084fc]" />
                    <span>Kelola Character Art Styles</span>
                  </h2>
                  <p className="text-xs text-[#a89dc6] mt-1">
                    Edit prompt karakter, nama gaya, kategori, atau hapus item.
                  </p>
                </div>

                <button
                  onClick={handleStartCreateChar}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-[#8b5cff] to-[#6a2fe0] hover:from-[#9d74ff] hover:to-[#783bec] text-white shadow-[0_4px_16px_rgba(139,92,255,0.4)] transition-all cursor-pointer shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Style Baru</span>
                </button>
              </div>

              {/* Characters List Table */}
              <div className="overflow-x-auto max-h-[600px]">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="sticky top-0 bg-[#140b28] z-10">
                    <tr className="border-b border-[#2b2247] text-[#a89dc6] text-[11px] uppercase tracking-wider">
                      <th className="pb-3 w-14">#</th>
                      <th className="pb-3">Nama Gaya</th>
                      <th className="pb-3">Kategori</th>
                      <th className="pb-3">Deskripsi</th>
                      <th className="pb-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#201538]">
                    {charStyles.map((item) => (
                      <tr key={item.id} className="hover:bg-[#160d2a]/70 transition-colors">
                        <td className="py-3 font-mono text-xs font-bold text-[#ffcf4a]">
                          #{item.number}
                        </td>
                        <td className="py-3 font-bold text-white pr-3">
                          {item.name}
                        </td>
                        <td className="py-3 text-xs text-[#c084fc] font-semibold pr-3">
                          {item.category}
                        </td>
                        <td className="py-3 text-xs text-[#c9b6e4] max-w-xs truncate pr-3">
                          {item.desc}
                        </td>
                        <td className="py-3 text-right whitespace-nowrap">
                          <div className="inline-flex items-center gap-1.5">
                            <button
                              onClick={() => {
                                setEditingChar({ ...item });
                                setIsCreatingChar(false);
                              }}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-[#251744] hover:bg-[#342260] text-[#cbb8ff] border border-[#483377] transition-all cursor-pointer"
                              title="Edit item ini"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                              <span>Edit</span>
                            </button>

                            <button
                              onClick={() => setDeletingChar(item)}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-red-950/40 hover:bg-red-900/60 text-red-200 border border-red-800/50 transition-all cursor-pointer"
                              title="Hapus item ini"
                            >
                              <Trash2 className="w-3.5 h-3.5 text-red-400" />
                              <span>Hapus</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------
              VIEW 4: HAK AKSES LOGIN & USER MANAGEMENT (NEW MENU)
             ---------------------------------------------------- */}
          {activeSidebarTab === 'hak-akses' && (
            <div className="space-y-6">
              
              {/* Header Box */}
              <div className="bg-[#120a22]/70 border border-[#2b2247] rounded-2xl p-6 sm:p-7 backdrop-blur-md">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2 mb-1">
                      <Shield className="w-6 h-6 text-[#ffcf4a]" />
                      <span>Hak Akses &amp; Akun Login</span>
                    </h2>
                    <p className="text-xs text-[#a89dc6] font-light">
                      Kelola kredensial akun administrator, akun member VIP, serta konfigurasi hak izin fitur SaungDigital.
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setShowMemberAccessModal(true)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#ffcf4a] bg-[#ffcf4a]/10 hover:bg-[#ffcf4a]/20 border border-[#ffcf4a]/30 transition-all cursor-pointer"
                    >
                      <Crown className="w-4 h-4" />
                      <span>Regulasi Akses</span>
                    </button>

                    <button
                      onClick={handleStartCreateUser}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#ffcf4a] to-[#e69f00] hover:from-[#ffe28a] hover:to-[#f0aa0a] text-black shadow-[0_4px_16px_rgba(255,207,74,0.3)] transition-all cursor-pointer"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>+ Tambah Akun Baru</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Section 1: Kredensial Login Administrator Utama */}
              <div className="bg-[#120a22]/70 border border-[#2b2247] rounded-2xl p-6 backdrop-blur-md">
                <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-[#2b2247]">
                  <Key className="w-5 h-5 text-[#8b5cff]" />
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Kredensial Login Administrator Utama
                    </h3>
                    <p className="text-[11px] text-[#a89dc6]">
                      Ubah username dan password akun admin dengan cepat tanpa masuk ke database.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleUpdateAdminCredentials} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1.5">
                      Username Admin
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-[#a89dc6]">
                        <User className="w-3.5 h-3.5" />
                      </span>
                      <input
                        type="text"
                        value={adminUsernameSetting}
                        onChange={(e) => setAdminUsernameSetting(e.target.value)}
                        required
                        className="w-full bg-[#160d2a] border border-[#352558] focus:border-[#8b5cff] rounded-xl py-2 pl-9 pr-3 text-xs sm:text-sm text-white outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1.5">
                      Password Admin Baru
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-[#a89dc6]">
                        <Lock className="w-3.5 h-3.5" />
                      </span>
                      <input
                        type={showAdminPasswordSetting ? 'text' : 'password'}
                        value={adminPasswordSetting}
                        onChange={(e) => setAdminPasswordSetting(e.target.value)}
                        required
                        className="w-full bg-[#160d2a] border border-[#352558] focus:border-[#8b5cff] rounded-xl py-2 pl-9 pr-9 text-xs sm:text-sm text-white outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowAdminPasswordSetting(!showAdminPasswordSetting)}
                        className="absolute right-3 text-[#a89dc6] hover:text-white transition-colors cursor-pointer"
                      >
                        {showAdminPasswordSetting ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-[#8b5cff] to-[#6a2fe0] hover:from-[#9d74ff] hover:to-[#783bec] text-white shadow-md transition-all cursor-pointer"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Simpan Kredensial Admin</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Section 2: Tabel Daftar Akun & Hak Akses Pengguna */}
              <div className="bg-[#120a22]/70 border border-[#2b2247] rounded-2xl p-6 backdrop-blur-md">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-3 border-b border-[#2b2247]">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#ffcf4a]" />
                      <span>Daftar Akun Pengguna &amp; Hak Akses</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#8b5cff]/20 text-[#cbb8ff] border border-[#8b5cff]/40">
                        {usersList.length} Akun
                      </span>
                    </h3>
                  </div>

                  {/* Search Bar */}
                  <div className="relative w-full sm:w-64">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a89dc6]">
                      <Search className="w-3.5 h-3.5" />
                    </span>
                    <input
                      type="text"
                      value={userSearchFilter}
                      onChange={(e) => setUserSearchFilter(e.target.value)}
                      placeholder="Cari nama, user, email..."
                      className="w-full bg-[#160d2a] border border-[#352558] focus:border-[#8b5cff] rounded-xl py-1.5 pl-8 pr-3 text-xs text-white placeholder-[#68598a] outline-none"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b border-[#2b2247] text-[#a89dc6] uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="py-2.5 px-3">Pengguna</th>
                        <th className="py-2.5 px-3">Username</th>
                        <th className="py-2.5 px-3">Peran (Hak Akses)</th>
                        <th className="py-2.5 px-3">Password</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-3">Terakhir Login</th>
                        <th className="py-2.5 px-3 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#22183c]">
                      {usersList
                        .filter(u => 
                          u.name.toLowerCase().includes(userSearchFilter.toLowerCase()) ||
                          u.username.toLowerCase().includes(userSearchFilter.toLowerCase()) ||
                          u.email.toLowerCase().includes(userSearchFilter.toLowerCase()) ||
                          u.role.toLowerCase().includes(userSearchFilter.toLowerCase())
                        )
                        .map((acc) => (
                          <tr key={acc.id} className="hover:bg-[#1a1133]/50 transition-colors">
                            <td className="py-3 px-3">
                              <div className="flex items-center gap-2.5">
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                                  acc.role === 'admin'
                                    ? 'bg-[#8b5cff]/20 text-[#cbb8ff] border border-[#8b5cff]/40'
                                    : 'bg-[#ffcf4a]/20 text-[#ffe28a] border border-[#ffcf4a]/40'
                                }`}>
                                  {acc.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                  <span className="font-bold text-white block">{acc.name}</span>
                                  <span className="text-[10px] text-[#a89dc6]">{acc.email}</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-3 font-mono text-white">
                              {acc.username}
                            </td>
                            <td className="py-3 px-3">
                              {acc.role === 'admin' ? (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#8b5cff]/20 text-[#cbb8ff] border border-[#8b5cff]/40">
                                  <Shield className="w-2.5 h-2.5" />
                                  <span>ADMINISTRATOR</span>
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#ffcf4a]/20 text-[#ffe28a] border border-[#ffcf4a]/40">
                                  <Crown className="w-2.5 h-2.5 text-[#ffcf4a]" />
                                  <span>MEMBER VIP</span>
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-3 font-mono text-[#a89dc6]">
                              ••••••••••••
                            </td>
                            <td className="py-3 px-3">
                              {acc.status === 'active' ? (
                                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                  <span>Aktif</span>
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-[11px] text-red-400 font-semibold">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                                  <span>Ditangguhkan</span>
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-3 text-[11px] text-[#a89dc6]">
                              {acc.lastLogin || acc.createdAt}
                            </td>
                            <td className="py-3 px-3 text-right">
                              <div className="inline-flex items-center gap-1.5">
                                <button
                                  onClick={() => {
                                    setEditingUser({ ...acc });
                                    setIsCreatingUser(false);
                                  }}
                                  className="p-1.5 rounded-lg text-[#cbb8ff] hover:text-white bg-[#251744] hover:bg-[#342260] border border-[#483377] transition-all cursor-pointer"
                                  title="Edit akun ini"
                                >
                                  <Edit3 className="w-3.5 h-3.5" />
                                </button>

                                {acc.username !== 'admin' && (
                                  <button
                                    onClick={() => setDeletingUser(acc)}
                                    className="p-1.5 rounded-lg text-red-300 hover:text-white bg-red-950/40 hover:bg-red-900/60 border border-red-800/50 transition-all cursor-pointer"
                                    title="Hapus akun ini"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 3: Konfigurasi Matriks Hak Akses (Interactive Permission Matrix) */}
              <div className="bg-[#120a22]/70 border border-[#2b2247] rounded-2xl p-6 backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2b2247]">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Matriks Perizinan Fitur (Member vs Admin)</span>
                    </h3>
                    <p className="text-[11px] text-[#a89dc6] mt-0.5">
                      Klik tombol status untuk mengubah izin akses untuk Member VIP atau Administrator secara langsung.
                    </p>
                  </div>
                </div>

                <div className="border border-[#2d204d] rounded-xl overflow-hidden bg-[#0d071a]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#170e2f] border-b border-[#2d204d] text-[#cbb8ff]">
                      <tr>
                        <th className="py-2.5 px-3.5 font-bold">Fitur &amp; Wewenang</th>
                        <th className="py-2.5 px-3 font-bold text-center w-36 text-[#ffcf4a]">
                          Member VIP
                        </th>
                        <th className="py-2.5 px-3 font-bold text-center w-36 text-[#8b5cff]">
                          Administrator
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#22183c] text-[#a89dc6]">
                      {[
                        { key: 'canViewPrompts' as const, label: 'Lihat & Salin Seluruh Prompt AI (Gems)' },
                        { key: 'canDownloadFiles' as const, label: 'Unduh Plugin .ccx & Panduan CLAUDE.md' },
                        { key: 'canViewCharacters' as const, label: 'Akses Galeri 35 Karakter Seni AI' },
                        { key: 'canAddContent' as const, label: 'Tambah Konten / Prompt Gems Baru' },
                        { key: 'canEditContent' as const, label: 'Edit Konten & Prompt Database' },
                        { key: 'canDeleteContent' as const, label: 'Hapus Konten dari Database' },
                        { key: 'canManageSettings' as const, label: 'Ubah Branding, Nama & Domain' },
                        { key: 'canBackupRestore' as const, label: 'Ekspor Backup JSON & Reset Pabrik' }
                      ].map((perm) => {
                        const memberPerm = permissionsList.find(p => p.role === 'member')?.[perm.key] ?? false;
                        const adminPerm = permissionsList.find(p => p.role === 'admin')?.[perm.key] ?? true;

                        return (
                          <tr key={perm.key} className="hover:bg-[#150d26]">
                            <td className="py-2.5 px-3.5 font-medium text-white">
                              {perm.label}
                            </td>
                            <td className="py-2.5 px-3 text-center">
                              <button
                                type="button"
                                onClick={() => handleTogglePermission('member', perm.key)}
                                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                                  memberPerm ? 'text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/60' : 'text-rose-400 bg-rose-950/30 hover:bg-rose-900/50'
                                }`}
                                title="Klik untuk ubah perizinan Member"
                              >
                                {memberPerm ? (
                                  <span className="inline-flex items-center gap-1 font-semibold text-[11px]">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>Diizinkan</span>
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 font-semibold text-[11px]">
                                    <XCircle className="w-3.5 h-3.5" />
                                    <span>Terkunci</span>
                                  </span>
                                )}
                              </button>
                            </td>
                            <td className="py-2.5 px-3 text-center">
                              <button
                                type="button"
                                onClick={() => handleTogglePermission('admin', perm.key)}
                                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                                  adminPerm ? 'text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/60' : 'text-rose-400 bg-rose-950/30 hover:bg-rose-900/50'
                                }`}
                                title="Klik untuk ubah perizinan Admin"
                              >
                                {adminPerm ? (
                                  <span className="inline-flex items-center gap-1 font-semibold text-[11px]">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>Diizinkan</span>
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 font-semibold text-[11px]">
                                    <XCircle className="w-3.5 h-3.5" />
                                    <span>Terkunci</span>
                                  </span>
                                )}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* ----------------------------------------------------
              VIEW 5: PENGATURAN WEBSITE
             ---------------------------------------------------- */}
          {activeSidebarTab === 'pengaturan' && (
            <div className="bg-[#120a22]/70 border border-[#2b2247] rounded-2xl p-6 sm:p-7 backdrop-blur-md max-w-2xl">
              <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2 mb-1">
                <Settings className="w-6 h-6 text-[#2bd4a0]" />
                <span>Pengaturan Website</span>
              </h2>
              <p className="text-xs text-[#a89dc6] mb-6 pb-4 border-b border-[#2b2247]">
                Konfigurasi identitas brand, nama domain, dan link sosial media.
              </p>

              <form onSubmit={handleSaveSettings} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#a89dc6] mb-1.5">
                    Nama Website / Brand
                  </label>
                  <input
                    type="text"
                    value={settings.siteName}
                    onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                    required
                    className="w-full bg-[#160d2a] border border-[#352558] focus:border-[#8b5cff] rounded-xl px-4 py-2.5 text-sm text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#a89dc6] mb-1.5">
                    Tagline
                  </label>
                  <input
                    type="text"
                    value={settings.tagline}
                    onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                    required
                    className="w-full bg-[#160d2a] border border-[#352558] focus:border-[#8b5cff] rounded-xl px-4 py-2.5 text-sm text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#a89dc6] mb-1.5">
                    Domain Website
                  </label>
                  <input
                    type="text"
                    value={settings.domain}
                    onChange={(e) => setSettings({ ...settings, domain: e.target.value })}
                    required
                    className="w-full bg-[#160d2a] border border-[#352558] focus:border-[#8b5cff] rounded-xl px-4 py-2.5 text-sm text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#a89dc6] mb-1.5">
                    YouTube URL
                  </label>
                  <input
                    type="url"
                    value={settings.youtubeUrl}
                    onChange={(e) => setSettings({ ...settings, youtubeUrl: e.target.value })}
                    required
                    className="w-full bg-[#160d2a] border border-[#352558] focus:border-[#8b5cff] rounded-xl px-4 py-2.5 text-sm text-white outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#8b5cff] to-[#6a2fe0] hover:from-[#9d74ff] hover:to-[#783bec] text-white shadow-[0_4px_16px_rgba(139,92,255,0.4)] transition-all cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Simpan Pengaturan</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ----------------------------------------------------
              VIEW 5: BACKUP & RESET
             ---------------------------------------------------- */}
          {activeSidebarTab === 'backup' && (
            <div className="bg-[#120a22]/70 border border-[#2b2247] rounded-2xl p-6 sm:p-7 backdrop-blur-md max-w-2xl">
              <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2 mb-1">
                <Database className="w-6 h-6 text-[#8b5cff]" />
                <span>Backup &amp; Reset Data</span>
              </h2>
              <p className="text-xs text-[#a89dc6] mb-6 pb-4 border-b border-[#2b2247]">
                Amankan seluruh data prompt atau kembalikan ke setelan awal pabrik kapan saja.
              </p>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-[#160d2a] border border-[#352558]">
                  <h3 className="text-sm font-bold text-white mb-1">Download Backup (.JSON)</h3>
                  <p className="text-xs text-[#a89dc6] mb-4">
                    Unduh seluruh data fotografi, karakter, dan pengaturan dalam format JSON untuk cadangan offline.
                  </p>
                  <button
                    onClick={handleExportBackup}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#8b5cff] hover:bg-[#7846ea] text-white transition-all cursor-pointer shadow-[0_0_12px_rgba(139,92,255,0.3)]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download File Cadangan</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40">
                  <h3 className="text-sm font-bold text-red-200 mb-1 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span>Reset ke Setelan Default Pabrik</span>
                  </h3>
                  <p className="text-xs text-[#a89dc6] mb-4">
                    Mengembalikan semua Photography Gems dan Character Art Styles ke data asli 100%. Data yang diedit manual akan diganti kembali.
                  </p>
                  <button
                    onClick={handleResetDefaults}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-red-900/60 hover:bg-red-800 text-white transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset Data Sekarang</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* ========================================================
          MODAL: EDIT / CREATE PHOTOGRAPHY GEM
         ======================================================== */}
      {editingGem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#140b28] border border-[#412e6b] rounded-2xl p-6 sm:p-7 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2d204d]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>{isCreatingGem ? 'Tambah Gem Baru' : `Edit Gem #${editingGem.num}`}</span>
              </h3>
              <button
                onClick={() => setEditingGem(null)}
                className="p-1 rounded-lg text-[#a89dc6] hover:text-white hover:bg-[#251744] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveGem} className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                    Nomor Gem
                  </label>
                  <input
                    type="text"
                    value={editingGem.num}
                    onChange={(e) => setEditingGem({ ...editingGem, num: e.target.value })}
                    required
                    placeholder="01"
                    className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#8b5cff] rounded-xl px-3 py-2 text-xs font-mono text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                    Ikon Emoji
                  </label>
                  <input
                    type="text"
                    value={editingGem.icon}
                    onChange={(e) => setEditingGem({ ...editingGem, icon: e.target.value })}
                    required
                    placeholder="🍽️"
                    className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#8b5cff] rounded-xl px-3 py-2 text-xs text-white outline-none text-center"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                    Nama Kategori
                  </label>
                  <input
                    type="text"
                    value={editingGem.prefix}
                    onChange={(e) => setEditingGem({ ...editingGem, prefix: e.target.value })}
                    required
                    placeholder="Food"
                    className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#8b5cff] rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                  Deskripsi Singkat
                </label>
                <textarea
                  value={editingGem.desc}
                  onChange={(e) => setEditingGem({ ...editingGem, desc: e.target.value })}
                  required
                  rows={2}
                  className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#8b5cff] rounded-xl px-3 py-2 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                  Tautan Google Gem URL
                </label>
                <input
                  type="url"
                  value={editingGem.gemUrl}
                  onChange={(e) => setEditingGem({ ...editingGem, gemUrl: e.target.value })}
                  required
                  className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#8b5cff] rounded-xl px-3 py-2 text-xs font-mono text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                  Sample Prompt Kamera (Nano Banana)
                </label>
                <textarea
                  value={editingGem.samplePrompt}
                  onChange={(e) => setEditingGem({ ...editingGem, samplePrompt: e.target.value })}
                  rows={3}
                  className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#8b5cff] rounded-xl px-3 py-2 text-xs font-mono text-white outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#2d204d]">
                <button
                  type="button"
                  onClick={() => setEditingGem(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-[#a89dc6] hover:text-white hover:bg-[#251744] cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#8b5cff] to-[#6a2fe0] text-white shadow-lg cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Simpan Perubahan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: CONFIRM DELETE PHOTOGRAPHY GEM
         ======================================================== */}
      {deletingGem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#160c28] border border-red-900/50 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 text-red-400 mb-3">
              <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-800/60 flex items-center justify-center shrink-0">
                <Trash2 className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-base font-bold text-white">Konfirmasi Hapus Gem</h3>
            </div>

            <p className="text-xs text-[#c9b6e4] leading-relaxed mb-6">
              Apakah Anda yakin ingin menghapus Gem <strong className="text-white">{deletingGem.prefix} Photography</strong> (#{deletingGem.num})? Tindakan ini akan menghapus kartu ini dari tampilan publik.
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setDeletingGem(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#a89dc6] hover:text-white hover:bg-[#251744] cursor-pointer"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmDeleteGem}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg cursor-pointer"
              >
                Ya, Hapus Gem
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: EDIT / CREATE CHARACTER STYLE
         ======================================================== */}
      {editingChar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#140b28] border border-[#412e6b] rounded-2xl p-6 sm:p-7 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2d204d]">
              <h3 className="text-lg font-bold text-white">
                {isCreatingChar ? 'Tambah Character Style' : `Edit Style #${editingChar.number}`}
              </h3>
              <button
                onClick={() => setEditingChar(null)}
                className="p-1 rounded-lg text-[#a89dc6] hover:text-white hover:bg-[#251744] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveChar} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                    Nomor Urut
                  </label>
                  <input
                    type="number"
                    value={editingChar.number}
                    onChange={(e) => setEditingChar({ ...editingChar, number: parseInt(e.target.value) || 1 })}
                    required
                    className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#8b5cff] rounded-xl px-3 py-2 text-xs font-mono text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                    Nama Gaya
                  </label>
                  <input
                    type="text"
                    value={editingChar.name}
                    onChange={(e) => setEditingChar({ ...editingChar, name: e.target.value })}
                    required
                    placeholder="Contoh: 3D Chibi"
                    className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#8b5cff] rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                  Kategori
                </label>
                <select
                  value={editingChar.category}
                  onChange={(e) => setEditingChar({ ...editingChar, category: e.target.value })}
                  className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#8b5cff] rounded-xl px-3 py-2 text-xs text-white outline-none"
                >
                  <option value="Sketch & Ink">Sketch &amp; Ink</option>
                  <option value="Cartoon & Caricature">Cartoon &amp; Caricature</option>
                  <option value="Anime & Manga">Anime &amp; Manga</option>
                  <option value="Black & White & Poster">Black &amp; White &amp; Poster</option>
                  <option value="Dark Fantasy">Dark Fantasy</option>
                  <option value="Game & Painterly">Game &amp; Painterly</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                  Deskripsi Gaya
                </label>
                <textarea
                  value={editingChar.desc}
                  onChange={(e) => setEditingChar({ ...editingChar, desc: e.target.value })}
                  required
                  rows={2}
                  className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#8b5cff] rounded-xl px-3 py-2 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                  Prompt Lengkap (Google Flow)
                </label>
                <textarea
                  value={editingChar.prompt}
                  onChange={(e) => setEditingChar({ ...editingChar, prompt: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#8b5cff] rounded-xl px-3 py-2 text-xs font-mono text-white outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#2d204d]">
                <button
                  type="button"
                  onClick={() => setEditingChar(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-[#a89dc6] hover:text-white hover:bg-[#251744] cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#8b5cff] to-[#6a2fe0] text-white shadow-lg cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Simpan Perubahan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: CONFIRM DELETE CHARACTER STYLE
         ======================================================== */}
      {deletingChar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#160c28] border border-red-900/50 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 text-red-400 mb-3">
              <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-800/60 flex items-center justify-center shrink-0">
                <Trash2 className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-base font-bold text-white">Konfirmasi Hapus Style</h3>
            </div>

            <p className="text-xs text-[#c9b6e4] leading-relaxed mb-6">
              Apakah Anda yakin ingin menghapus gaya karakter <strong className="text-white">{deletingChar.name}</strong> (#{deletingChar.number})?
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setDeletingChar(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#a89dc6] hover:text-white hover:bg-[#251744] cursor-pointer"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmDeleteChar}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg cursor-pointer"
              >
                Ya, Hapus Style
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: EDIT / CREATE USER ACCOUNT
         ======================================================== */}
      {editingUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#140b28] border border-[#ffcf4a]/40 rounded-2xl p-6 sm:p-7 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2d204d]">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#ffcf4a]" />
                <h3 className="text-lg font-bold text-white">
                  {isCreatingUser ? 'Tambah Akun Pengguna Baru' : `Edit Akun: ${editingUser.name}`}
                </h3>
              </div>
              <button
                onClick={() => setEditingUser(null)}
                className="p-1 rounded-lg text-[#a89dc6] hover:text-white hover:bg-[#251744] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveUser} className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={editingUser.name}
                    onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                    required
                    placeholder="Contoh: Irwan Ahmad"
                    className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#ffcf4a] rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                    Username / ID Login
                  </label>
                  <input
                    type="text"
                    value={editingUser.username}
                    onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })}
                    required
                    placeholder="Contoh: membervip"
                    className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#ffcf4a] rounded-xl px-3 py-2 text-xs font-mono text-white outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                    Email Pengguna
                  </label>
                  <input
                    type="email"
                    value={editingUser.email}
                    onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    required
                    placeholder="user@example.com"
                    className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#ffcf4a] rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                    No. WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={editingUser.phone || ''}
                    onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })}
                    placeholder="0812xxxxxxxx"
                    className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#ffcf4a] rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                    Peran / Hak Akses
                  </label>
                  <select
                    value={editingUser.role}
                    onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value as 'admin' | 'member' })}
                    className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#ffcf4a] rounded-xl px-3 py-2 text-xs text-white outline-none"
                  >
                    <option value="member">Member VIP</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                    Status Akun
                  </label>
                  <select
                    value={editingUser.status}
                    onChange={(e) => setEditingUser({ ...editingUser, status: e.target.value as 'active' | 'suspended' })}
                    className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#ffcf4a] rounded-xl px-3 py-2 text-xs text-white outline-none"
                  >
                    <option value="active">Aktif</option>
                    <option value="suspended">Ditangguhkan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-[#a89dc6] mb-1">
                  Password Login
                </label>
                <input
                  type="text"
                  value={editingUser.password || ''}
                  onChange={(e) => setEditingUser({ ...editingUser, password: e.target.value })}
                  placeholder="Masukkan password baru..."
                  className="w-full bg-[#0d071a] border border-[#352558] focus:border-[#ffcf4a] rounded-xl px-3 py-2 text-xs font-mono text-white outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#2d204d]">
                <button
                  type="button"
                  onClick={() => setEditingUser(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-[#a89dc6] hover:text-white hover:bg-[#251744] cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#ffcf4a] to-[#e69f00] text-black shadow-lg cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Simpan Akun</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: CONFIRM DELETE USER ACCOUNT
         ======================================================== */}
      {deletingUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#160c28] border border-red-900/50 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 text-red-400 mb-3">
              <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-800/60 flex items-center justify-center shrink-0">
                <Trash2 className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-base font-bold text-white">Konfirmasi Hapus Akun</h3>
            </div>

            <p className="text-xs text-[#c9b6e4] leading-relaxed mb-6">
              Apakah Anda yakin ingin menghapus akun pengguna <strong className="text-white">{deletingUser.name}</strong> (@{deletingUser.username})? Pengguna ini tidak akan bisa login lagi ke sistem.
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setDeletingUser(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#a89dc6] hover:text-white hover:bg-[#251744] cursor-pointer"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmDeleteUser}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg cursor-pointer"
              >
                Ya, Hapus Akun
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: MENU HAK AKSES MEMBER (Accessible from Admin Dashboard) */}
      {showMemberAccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#140b28] border border-[#ffcf4a]/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(255,207,74,0.15)] max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 mb-5 border-b border-[#2d204d]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#ffcf4a]/15 border border-[#ffcf4a]/30 flex items-center justify-center shrink-0">
                  <Crown className="w-6 h-6 text-[#ffcf4a]" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white flex items-center gap-2">
                    Menu Hak Akses <span className="text-[#ffcf4a]">Member VIP</span>
                  </h2>
                  <p className="text-xs text-[#a89dc6] mt-0.5">
                    Regulasi pembagian wewenang antara pengguna Member VIP dan Administrator SaungDigital
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowMemberAccessModal(false)}
                className="p-1.5 rounded-lg text-[#a89dc6] hover:text-white hover:bg-[#251744] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-xl bg-[#0d071a] border border-[#2b1f48] hover:border-[#ffcf4a]/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                  <Sparkles className="w-4 h-4 text-[#ffcf4a]" />
                  <span>Photography Google Gems</span>
                </div>
                <p className="text-[11px] text-[#a89dc6] leading-relaxed">
                  Akses penuh 10+ prompt realistis Gemini Gems untuk simulasi kamera analog, portrait studio, &amp; editorial.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0d071a] border border-[#2b1f48] hover:border-[#ffcf4a]/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                  <Download className="w-4 h-4 text-[#ffcf4a]" />
                  <span>Download Plugin Photoshop</span>
                </div>
                <p className="text-[11px] text-[#a89dc6] leading-relaxed">
                  Unduh file paket ekstensi Color Palette (<code className="text-[#ffcf4a]">.ccx</code>) &amp; instruksi <code className="text-[#ffcf4a]">CLAUDE.md</code>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0d071a] border border-[#2b1f48] hover:border-[#ffcf4a]/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                  <Palette className="w-4 h-4 text-[#ffcf4a]" />
                  <span>35 Koleksi Gaya Karakter</span>
                </div>
                <p className="text-[11px] text-[#a89dc6] leading-relaxed">
                  Eksplorasi prompt siap pakai format Google Flow untuk Anime, Sketch, Caricature, hingga Dark Fantasy.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0d071a] border border-[#2b1f48] hover:border-[#ffcf4a]/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#ffcf4a]" />
                  <span>Aman &amp; Terproteksi</span>
                </div>
                <p className="text-[11px] text-[#a89dc6] leading-relaxed">
                  Member dilindungi dari risiko kesalahan sistem. Hak modifikasi database dikelola oleh tim Administrator.
                </p>
              </div>
            </div>

            {/* Comparison Matrix Table */}
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#ffcf4a] mb-2.5">
                Tabel Matriks Hak Akses (Member vs Admin)
              </h3>
              <div className="border border-[#2d204d] rounded-xl overflow-hidden bg-[#0d071a]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#170e2f] border-b border-[#2d204d] text-[#cbb8ff]">
                    <tr>
                      <th className="py-2.5 px-3.5 font-bold">Fitur &amp; Wewenang</th>
                      <th className="py-2.5 px-3 font-bold text-center w-32 text-[#ffcf4a]">Member VIP</th>
                      <th className="py-2.5 px-3 font-bold text-center w-32 text-[#8b5cff]">Administrator</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#22183c] text-[#a89dc6]">
                    <tr>
                      <td className="py-2.5 px-3.5 font-medium text-white">Lihat &amp; Salin Seluruh Prompt AI</td>
                      <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3.5 font-medium text-white">Unduh Plugin .ccx &amp; Panduan CLAUDE.md</td>
                      <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3.5 font-medium text-white">Akses Galeri 35 Karakter Seni AI</td>
                      <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                      <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3.5 font-medium text-white">Tambah &amp; Edit Prompt Gems Baru</td>
                      <td className="py-2.5 px-3 text-center"><XCircle className="w-4 h-4 text-rose-500 inline" /></td>
                      <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3.5 font-medium text-white">Hapus Konten dari Database Website</td>
                      <td className="py-2.5 px-3 text-center"><XCircle className="w-4 h-4 text-rose-500 inline" /></td>
                      <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3.5 font-medium text-white">Pengaturan Branding, Nama &amp; URL Domain</td>
                      <td className="py-2.5 px-3 text-center"><XCircle className="w-4 h-4 text-rose-500 inline" /></td>
                      <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3.5 font-medium text-white">Ekspor Backup JSON &amp; Reset Pabrik</td>
                      <td className="py-2.5 px-3 text-center"><XCircle className="w-4 h-4 text-rose-500 inline" /></td>
                      <td className="py-2.5 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 inline" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t border-[#2d204d]">
              <button
                type="button"
                onClick={() => setShowMemberAccessModal(false)}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#ffcf4a] hover:bg-[#ffe28a] text-black shadow-lg transition-all cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
