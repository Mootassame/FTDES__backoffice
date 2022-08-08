const ar = {
  common: {
    or: 'أو',
    cancel: 'إلغاء',
    reset: 'إعادة ضبط',
    save: 'حفظ',
    search: 'بحث',
    edit: 'تعديل',
    remove: 'إزالة',
    new: 'جديد',
    export: 'تصدير إلى Excel',
    noDataToExport: 'لا توجد بيانات للتصدير',
    import: 'استيراد',
    discard: 'تجاهل',
    yes: 'نعم',
    no: 'لا',
    pause: 'متوقف',
    areYouSure: 'هل أنت واثق؟',
    view: 'عرض',
    destroy: 'حذف',
    mustSelectARow: 'يجب تحديد صف',
    filters: 'بحث متقدم',
  },

  app: {
    title: 'المنتدى التونسي للحقوق الاقتصادية والاجتماعية',
  },

  api: {
    menu: 'API',
  },

  entities: {
    publication: {
      name: 'publication',
      label: 'المنشورات',
      menu: 'المنشورات',
      exporterFileName: 'publication_export',
      list: {
        menu: 'المنشورات',
        title: 'المنشورات',
      },
      create: {
        success: 'تم حفظ المنشور بنجاح',
      },
      update: {
        success: 'تم حفظ المنشور بنجاح',
      },
      destroy: {
        success: 'تم حذف المنشور بنجاح',
      },
      destroyAll: {
        success: 'تم حذف المنشورات بنجاح',
      },
      edit: {
        title: 'تحرير المنشور',
      },
      fields: {
        id: 'Id',
        thematique: 'موضوع',
        categorie: 'فئة',
        type: 'صنف',
        supports: 'المرفقات',
        description: 'التفاصيل',
        statut: 'الحالة',
        dateRange: 'تاريخ',
        date: 'تاريخ',
        createdAt: 'أنشئت في',
        updatedAt: 'تم التحديث في',
        createdAtRange: 'أنشئت في',
      },
      enumerators: {
        categorie: {
          Manifestation: 'تظاهرة',
          'article scientifique': 'مقال علمي',
          'article journalistique': 'مقال صحفي',
          rapport: 'تقرير',
          entretien: 'مقابلة عمل',
          'données numériques': 'البيانات الرقمية',
          autre: 'آخر',
        },
        type: {
          Texte: 'نص',
          audio: 'صوتي',
          vidéo: 'فيديو',
          'lien web': 'رابط الموقع',
          photo: 'صورة',
          infographie: 'الرسوم البيانية',
          statistiques: 'إحصائيات',
          autre: 'آخر',
        },
        statut: {
          Archivé: 'أرشيف',
          'En attente de validation': 'في إنتظار الموافقة',
          Validé: 'مؤكد',
          Rejeté: 'مرفوض',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'منشور جديد',
      },
      view: {
        title: 'إظهار المنشور',
      },
      importer: {
        title: 'تحميل المشاركات',
        fileName: 'publication_import_template',
        hint: 'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة.',
      },
    },

    forum: {
      name: 'forum',
      label: 'المنتديات',
      menu: 'المنتديات',
      exporterFileName: 'forum_export',
      list: {
        menu: 'المنتديات',
        title: 'المنتديات',
      },
      create: {
        success: 'تم حفظ المنتدى بنجاح',
      },
      update: {
        success: 'تم حفظ المنتدى بنجاح',
      },
      destroy: {
        success: 'تم حذف المنتدى بنجاح',
      },
      destroyAll: {
        success: 'تم حذف المنتديات بنجاح',
      },
      edit: {
        title: 'تحرير المنتدى',
      },
      fields: {
        id: 'Id',
        titre: 'العنوان',
        sujet: 'الموضوع',
        visibilite: 'الرؤية',
        statut: 'الحالة',
        createdAt: 'أنشئت في',
        updatedAt: 'تم التحديث في',
        createdAtRange: 'أنشئت في',
      },
      enumerators: {
        visibilite: {
          Ouverte: 'علني',
          Fermee: 'خاص',
        },
        statut: {
          en_attente: 'في إنتظار الموافقة',
          Validé: 'مؤكد',
          Rejeté: 'مرفوض',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'منتدى جديد',
      },
      view: {
        title: 'مشاهدة المنتدى',
      },
      importer: {
        title: 'تحميل المنتدى',
        fileName: 'forum_import_template',
        hint: 'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة.',
      },
    },

    demandeAppui: {
      name: 'demandeAppui',
      label: 'طلب دعم',
      menu: 'طلب دعم',
      exporterFileName: 'demandeAppui_export',
      list: {
        menu: 'طلب دعم',
        title: 'طلب دعم',
      },
      create: {
        success: 'تم حفظ طلب الدعم بنجاح',
      },
      update: {
        success: 'تم حفظ طلب الدعم بنجاح',
      },
      destroy: {
        success: 'تمت إزالة طلب الدعم بنجاح',
      },
      destroyAll: {
        success: 'تمت إزالة طلبات الدعم بنجاح',
      },
      edit: {
        title: 'تحرير طلب الدعم',
      },
      fields: {
        id: 'Id',
        type: 'الصنف',
        etat: 'الحالة',
        gouvernorat: 'الولاية',
        importance: 'الأهمية',
        description: 'التفاصيل',
        supports: 'المرفقات',
        createdAt: 'أنشئت في',
        updatedAt: 'تم التحديث في',
        createdAtRange: 'أنشئت في',
      },
      enumerators: {
        type: {
          Legal: 'قانوني',
          logistique: 'خدمات اللوجستية',
        },
        etat: {
          En_ligne: 'عبر الانترنت',
          physique: 'مادي',
        },
        gouvernorat: {
          tunis: 'تونس',
          ariana: 'أريانة',
          beja: 'باجة',
          ben_arouss: 'بن عروس',
          bizerte: 'بنزرت',
          gabes: 'قابس',
          gafsa: 'قفصة',
          jendouba: 'جندوبة',
          kairouan: 'القيروان',
          kasserine: 'القصرين',
          kebili: 'قبلي',
          kef: 'الكاف',
          mahdia: 'المهدية',
          manouba: 'منوبة',
          medenine: 'مدنين',
          monastir: 'المنستير',
          nabeul: 'نابل',
          sfax: 'صفاقس',
          sidi_bouzid: 'سيدي بوزيد',
          siliana: 'سليانة',
          sousse: 'سوسة',
          tataouine: 'تطاوين',
          tozeur: 'توزر',
          zaghouan: 'زغوان',
        },
        importance: {
          Haute: 'عالية',
          modere: 'متوسطة',
          normale: 'عادية',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'طلب دعم جديد',
      },
      view: {
        title: 'عرض طلب الدعم',
      },
      importer: {
        title: 'تحميل طلب دعم',
        fileName: 'demandeAppui_import_template',
        hint: 'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة.',
      },
    },

    evenement: {
      name: 'evenement',
      label: 'الأحداث',
      menu: 'الأحداث',
      exporterFileName: 'evenement_export',
      list: {
        menu: 'الأحداث',
        title: 'الأحداث',
      },
      create: {
        success: 'تم حفظ الحدث بنجاح',
      },
      update: {
        success: 'تم حفظ الحدث بنجاح',
      },
      destroy: {
        success: 'تم حذف الحدث بنجاح',
      },
      destroyAll: {
        success: 'تم حذف الأحداث بنجاح',
      },
      edit: {
        title: 'تعديل الحدث',
      },
      fields: {
        id: 'Id',
        thematique: 'موضوع',
        categorie: 'فئة',
        type: 'صنف',
        supports: 'المرفقات',
        description: 'التفاصيل',
        statut: 'الحالة',
        dateRange: 'تاريخ',
        date: 'تاريخ',
        emplacement: 'المكان',
        createdAt: 'أنشئت في',
        updatedAt: 'تم التحديث في',
        createdAtRange: 'أنشئت في',
      },
      enumerators: {
        categorie: {
          Ceremonies: 'احتفالات',
          Manifestation: 'تضاهرة',
        },
        type: {
          Texte: 'نص',
          audio: 'صوتي',
          vidéo: 'فيديو',
          'lien web': 'رابط الموقع',
          photo: 'صورة',
          infographie: 'الرسوم البيانية',
          statistiques: 'إحصائيات',
          autre: 'آخر',
        },
        statut: {
          Archivé: 'أرشيف',
          en_attente: 'في إنتظار الموافقة',
          Validé: 'مؤكد',
          Rejeté: 'مرفوض',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'حدث جديد',
      },
      view: {
        title: 'عرض الحدث',
      },
      importer: {
        title: 'Import الأحداث',
        fileName: 'evenement_import_template',
        hint: 'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة.',
      },
    },

    thematique: {
      name: 'thematique',
      label: 'المواضيع',
      menu: 'المواضيع',
      exporterFileName: 'thematique_export',
      list: {
        menu: 'المواضيع',
        title: 'المواضيع',
      },
      create: {
        success: 'تم حفظ الموضوع بنجاح',
      },
      update: {
        success: 'تم حفظ الموضوع بنجاح',
      },
      destroy: {
        success: 'تم حذف الموضوع بنجاح',
      },
      destroyAll: {
        success: 'تم حذف المواضيع',
      },
      edit: {
        title: 'Edit موضوع',
      },
      fields: {
        id: 'Id',
        titre: 'العنوان',
        description: 'التفاصيل',
        tags: 'الوسوم',
        createdAt: 'أنشئت في',
        updatedAt: 'تم التحديث في',
        createdAtRange: 'أنشئت في',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'موضوع جديد',
      },
      view: {
        title: 'عرض الموضوع',
      },
      importer: {
        title: 'تحميل المواضيع',
        fileName: 'thematique_import_template',
        hint: 'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة.',
      },
    },

    tags: {
      name: 'tags',
      label: 'الوسوم',
      menu: 'الوسوم',
      exporterFileName: 'tags_export',
      list: {
        menu: 'الوسوم',
        title: 'الوسوم',
      },
      create: {
        success: 'تم حفظ الوسوم بنجاح',
      },
      update: {
        success: 'تم حفظ الوسوم بنجاح',
      },
      destroy: {
        success: 'تم حذف الوسوم بنجاح',
      },
      destroyAll: {
        success: 'تم حذف الوسوم بنجاح',
      },
      edit: {
        title: 'تعديل الوسم',
      },
      fields: {
        id: 'Id',
        titre: 'العنوان',
        description: 'التفاصيل',
        createdAt: 'أنشئت في',
        updatedAt: 'تم التحديث في',
        createdAtRange: 'أنشئت في',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'وسم جديد',
      },
      view: {
        title: 'عرض الوسم',
      },
      importer: {
        title: 'تحميل الوسوم',
        fileName: 'tags_import_template',
        hint: 'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة.',
      },
    },

    artiste: {
      name: 'artiste',
      label: 'الفنانين',
      menu: 'الفنانين',
      exporterFileName: 'artiste_export',
      list: {
        menu: 'الفنانين',
        title: 'الفنانين',
      },
      create: {
        success: 'تم حفظ الفنان بنجاح',
      },
      update: {
        success: 'تم حفظ الفنان بنجاح',
      },
      destroy: {
        success: 'تم حذف الفنان بنجاح',
      },
      destroyAll: {
        success: 'تم حذف الفنانين بنجاح',
      },
      edit: {
        title: 'تعديل الفنان',
      },
      fields: {
        id: 'Id',
        nom: 'اللقب',
        prenom: 'الاسم',
        domaine: 'المجال',
        adresse: 'العنوان',
        email: 'البريد الإلكتروني',
        phoneNumberRange: 'رقم الهاتف',
        phoneNumber: 'رقم الهاتف',
        espaceArtistique: 'المعرض الفني',
        createdAt: 'أنشئت في',
        updatedAt: 'تم التحديث في',
        createdAtRange: 'أنشئت في',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'فنان جديد',
      },
      view: {
        title: 'عرض الفنان',
      },
      importer: {
        title: 'تحميل الفنانين',
        fileName: 'artiste_import_template',
        hint: 'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة.',
      },
    },

    espaceArtistique: {
      name: 'espaceArtistique',
      label: 'المعرض الفني',
      menu: 'المعرض الفني',
      exporterFileName: 'espaceArtistique_export',
      list: {
        menu: 'المعرض الفني',
        title: 'المعرض الفني',
      },
      create: {
        success: 'تم حفظ المعرض الفني بنجاح',
      },
      update: {
        success: 'تم حفظ المعرض الفني بنجاح',
      },
      destroy: {
        success: 'تم حذف المعرض الفني بنجاح',
      },
      destroyAll: {
        success: 'تم حذف المعارض الفنية بنجاح',
      },
      edit: {
        title: 'تعديل المعرض الفني',
      },
      fields: {
        id: 'Id',
        artiste: 'الفنان',
        supports: 'المرفقات',
        titre: 'العنوان',
        description: 'التفاصيل',
        createdAt: 'أنشئت في',
        updatedAt: 'تم التحديث في',
        createdAtRange: 'أنشئت في',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'معرض فني جديد ',
      },
      view: {
        title: 'عرض المعرض الفني',
      },
      importer: {
        title: 'تحميل المعارض الفنية',
        fileName: 'espaceArtistique_import_template',
        hint: 'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة.',
      },
    },
  },

  auth: {
    tenants: 'مساحات العمل',
    profile: {
      title: 'الملف الشخصي',
      success: 'تم تحديث الملف الشخصي بنجاح',
    },
    createAnAccount: 'انشئ حساب',
    rememberMe: 'تذكرنى',
    forgotPassword: 'هل نسيت كلمة السر',
    signin: 'تسجيل الدخول',
    signup: 'انشئ حساب',
    signout: 'خروج',
    alreadyHaveAnAccount: 'هل لديك حساب؟ انشئ حساب',
    social: {
      errors: {
        'auth-invalid-provider':
          'هذا البريد الإلكتروني مسجل بالفعل لمزود آخر.',
        'auth-no-email': `البريد الإلكتروني المرتبط بهذا الحساب خاص أو غير موجود.`,
      },
    },
    signinWithAnotherAccount: 'تسجيل الدخول بحساب آخر',
    passwordChange: {
      title: 'غير كلمة السر',
      success: 'الرقم السري تغير بنجاح',
      mustMatch: 'يجب ان تتطابق كلمات المرور',
    },
    emailUnverified: {
      message: `يرجى تأكيد بريدك الإلكتروني على <strong> {0} </strong> للمتابعة.`,
      submit: `إعادة إرسال التحقق من البريد الإلكتروني`,
    },
    emptyPermissions: {
      message: `ليس لديك أذونات حتى الآن. انتظر حتى يمنحك المسؤول الامتيازات.`,
    },
    passwordResetEmail: {
      message:
        'إرسال بريد إلكتروني لإعادة تعيين كلمة المرور',
      error: `لم يتم التعرف على البريد الإلكتروني`,
    },
    passwordReset: {
      message: 'إعادة تعيين كلمة المرور',
    },
    emailAddressVerificationEmail: {
      error: `لم يتم التعرف على البريد الإلكتروني`,
    },
    verificationEmailSuccess: `تم إرسال البريد الإلكتروني للتحقق بنجاح`,
    passwordResetEmailSuccess: `تم إرسال البريد الإلكتروني الخاص بإعادة تعيين كلمة المرور بنجاح`,
    passwordResetSuccess: `الرقم السري تغير بنجاح`,
    verifyEmail: {
      success: 'تم التحقق من البريد الإلكتروني بنجاح.',
      message:
        'لحظة فقط ، يتم التحقق من بريدك الإلكتروني ...',
    },
  },

  tenant: {
    name: 'tenant',
    label: 'مساحات العمل',
    menu: 'مساحات العمل',
    list: {
      menu: 'مساحات العمل',
      title: 'مساحات العمل',
    },
    create: {
      button: 'قم بإنشاء مساحة عمل',
      success: 'تم حفظ مساحة العمل بنجاح',
    },
    update: {
      success: 'تم حفظ مساحة العمل بنجاح',
    },
    destroy: {
      success: 'تم حذف مساحة العمل بنجاح',
    },
    destroyAll: {
      success: 'تم حذف مساحات العمل بنجاح',
    },
    edit: {
      title: 'تعديل مساحة العمل',
    },
    fields: {
      id: 'Id',
      name: 'الاسم',
      url: 'URL',
      tenantName: 'اسم مساحة العمل',
      tenantId: 'مساحة العمل',
      tenantUrl: 'مساحة العمل URL',
      plan: 'خطة',
    },
    enumerators: {},
    new: {
      title: 'مساحة عمل جديدة',
    },
    invitation: {
      view: 'عرض الدعوات',
      invited: 'مدعو',
      accept: 'قبول دعوة',
      decline: 'رفض الدعوة',
      declined: 'تم رفض الدعوة بنجاح',
      acceptWrongEmail:
        'اقبل الدعوة بهذا البريد الإلكتروني',
    },
    select: 'حدد مساحة العمل',
    validation: {
      url: 'يمكن أن يحتوي عنوان URL الخاص بمساحة العمل فقط على أحرف صغيرة وأرقام وشرطات (ويجب أن يبدأ بحرف أو رقم).',
    },
  },

  roles: {
    admin: {
      label: 'الادارة',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom access to resources',
    },
  },

  user: {
    invite: 'دعوة',
    title: 'المستخدمون',
    menu: 'المستخدمون',
    fields: {
      id: 'Id',
      avatars: 'الصورة الرمزية',
      email: 'البريد الإلكتروني',
      emails: 'البريد الإلكتروني',
      fullName: 'الإسم',
      firstName: 'الإسم',
      lastName: 'اللقب',
      status: 'الحالة',
      phoneNumber: 'رقم الهاتف',
      role: 'الدور',
      createdAt: 'أنشئت في',
      updatedAt: 'تم التحديث في',
      roleUser: 'الدور',
      roles: 'الادوار',
      createdAtRange: 'أنشئت في',
      password: 'كلمة المرور',
      rememberMe: 'تذكرنى',
      oldPassword: 'كلمة المرور القديمة',
      newPassword: 'كلمة السر الجديدة',
      newPasswordConfirmation: 'تأكيد كلمة السر الجديدة',
    },
    validations: {
      // eslint-disable-next-line
      email: 'البريد الإلكتروني $ {value} غير صالح',
    },
    disable: 'تعطيل',
    enable: 'تمكين',
    doAddSuccess: 'تم حفظ المستخدم بنجاح',
    doUpdateSuccess: 'تم حفظ المستخدم بنجاح',
    status: {
      active: 'فعال',
      invited: 'مدعو',
      'empty-permissions': 'في انتظار الإذن',
    },
    exporterFileName: 'users_export',
    doDestroySuccess: 'تم حذف المستخدم بنجاح',
    doDestroyAllSelectedSuccess: 'تم حذف المستخدمين بنجاح',
    edit: {
      title: 'تعديل المستخدم',
    },
    new: {
      title: 'مستخدم جديد',
      titleModal: 'مستخدم جديد',
      emailsHint:
        'افصل بين عناوين البريد الإلكتروني المتعددة باستخدام حرف الفاصلة.',
    },
    view: {
      title: 'عرض المستخدم',
      activity: 'نشاط',
    },
    importer: {
      title: 'تحميل المستخدمين',
      fileName: 'users_import_template',
      hint: 'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'المستخدم مع هذا البريد الإلكتروني موجود بالفعل',
      userNotFound: 'المستخدم ليس موجود',
      disablingHimself: `لا يمكنك تعطيل نفسك`,
      revokingOwnPermission: `لا يمكنك إلغاء إذن المسؤول الخاص بك`,
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'سجلات التدقيق',
    title: 'سجلات التدقيق',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'افصل بين الكيانات المتعددة باستخدام حرف الفاصلة.',
    fields: {
      id: 'Id',
      timestampRange: 'توقيت',
      entityName: 'كيان',
      entityNames: 'الكيانات',
      entityId: 'كيان ID',
      action: 'الفعل',
      values: 'المفردات',
      timestamp: 'تاريخ',
      createdByEmail: 'البريد الالكتروني للمستخدم',
    },
  },
  settings: {
    title: 'الإعدادات',
    menu: 'الإعدادات',
    save: {
      success:
        'تم حفظ الإعدادات بنجاح. ستتم إعادة تحميل الصفحة في غضون {0} ثانية حتى تدخل التغييرات حيز التنفيذ.',
    },
    fields: {
      theme: 'العرض',
      logos: 'الشعار',
      backgroundImages: 'الصورة الخلفية',
    },
    colors: {
      default: 'إفتراضي',
      cyan: 'ازرق سماوي',
      'geek-blue': 'أزرق',
      gold: 'ذهبي',
      lime: 'جير',
      magenta: 'أرجواني',
      orange: 'برتقالي',
      'polar-green': 'القطبية الخضراء',
      purple: 'أرجواني',
      red: 'أحمر',
      volcano: 'بركاني',
      yellow: 'اصفر',
    },
  },
  dashboard: {
    menu: 'لوحة القيادة',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'يوم',
      red: 'أحمر',
      green: 'أخضر',
      yellow: 'أصفر',
      grey: 'رمادي',
      blue: 'أزرق',
      orange: 'برتقالي',
      months: {
        '1': 'يناير',
        '2': 'فبراير',
        '3': 'مارس',
        '4': 'أبريل',
        '5': 'مايو',
        '6': 'يونيو',
        '7': 'يوليو',
        '8': 'أغسطس',
        '9': 'سبتمبر',
        '10': 'أكتوبر',
        '11': 'نوفمبر',
        '12': 'ديسمبر',
      },
    },
  },
  errors: {
    backToHome: 'العودة إلى الصفحة الرئيسية',
    403: `عذرا ، ليس لديك حق الوصول إلى هذه الصفحة`,
    404: 'عذرا ، الصفحة التي زرتها غير موجودة',
    500: 'عذرا ، الخادم يقوم بالإبلاغ عن خطأ',
    429: 'طلبات كثيرة جدا. الرجاء معاودة المحاولة في وقت لاحق.',
    forbidden: {
      message: 'ممنوع',
    },
    validation: {
      message: 'حدث خطأ',
    },
    defaultErrorMessage: 'عذرًا ، حدث خطأ',
  },

  preview: {
    error:
      'عذرا ، هذه العملية غير مسموح بها في وضع المعاينة.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '$ {path} غير صالح',
      required: 'مطلوب $ {path}',
      oneOf:
        'يجب أن يكون $ {path} أحد القيم التالية: $ {values}',
      notOneOf:
        'يجب ألا يكون $ {path} من القيم التالية: $ {values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        'يجب أن يتألف $ {path} من $ {length} حرفًا بالضبط',
      min: 'يجب أن يكون $ {path} على الأقل $ {min} حرفًا',
      max: 'يجب ألا يزيد عدد الأحرف في $ {path} عن $ {max} حرفًا',
      matches:
        'يجب أن يتطابق $ {path} مع ما يلي: "$ {regex}"',
      email:
        'يجب أن يكون $ {path} بريدًا إلكترونيًا صالحًا',
      url: 'يجب أن يكون $ {path} عنوان URL صالحًا',
      trim: 'يجب أن يكون $ {path} سلسلة مقتطعة',
      lowercase: 'يجب أن يكون $ {path} سلسلة أحرف صغيرة',
      uppercase: 'يجب أن يكون $ {path} سلسلة أحرف كبيرة',
      selected: 'يجب تحديد $ {path}',
    },
    number: {
      min: 'يجب أن يكون $ {path} أكبر من أو يساوي $ {min}',
      max: 'يجب أن يكون $ {path} أقل من أو يساوي $ {max}',
      lessThan: 'يجب أن يكون $ {path} أقل من $ {less}',
      moreThan: 'يجب أن يكون $ {path} أكبر من $ {more}',
      notEqual:
        'يجب ألا يكون $ {path} مساويًا لـ $ {notEqual}',
      positive: 'يجب أن يكون $ {path} رقمًا موجبًا',
      negative: 'يجب أن يكون $ {path} رقمًا سالبًا',
      integer: 'يجب أن يكون $ {path} عددًا صحيحًا',
    },
    date: {
      min: 'يجب أن يكون الحقل $ {path} بعد $ {min}',
      max: 'يجب أن يكون الحقل $ {path} قبل $ {max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'لا يمكن أن يحتوي حقل $ {path} على مفاتيح غير محددة في شكل الكائن',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `مطلوب $ {path}`
          : `يجب أن يحتوي حقل $ {path} على $ {min} عنصرًا على الأقل`,
      max: 'يجب أن يحتوي الحقل $ {path} على أقل من أو يساوي $ {max} عنصرًا',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'تحميل',
    image: 'يجب عليك تحميل الصورة',
    size: 'الملف كبير جدا. الحجم الأقصى المسموح به هو {0}',
    formats: `تنسيق غير صالح. يجب أن يكون واحدًا مما يلي: {0}.`,
  },
  importer: {
    line: 'سطر',
    status: 'حالة',
    pending: 'قيد الانتظار',
    imported: 'محمل',
    error: 'خطأ',
    total: `تم استيراد {0} و {1} معلق و {2} مع وجود خطأ`,
    importedMessage: `تمت معالجة {0} من {1}.`,
    noNavigateAwayMessage:
      'لا تنتقل بعيدًا عن هذه الصفحة وإلا فسيتم إيقاف الاستيراد.',
    completed: {
      success:
        'اكتمل الاستيراد. تم استيراد جميع الصفوف بنجاح.',
      someErrors:
        'اكتملت المعالجة ، لكن تعذر استيراد بعض الصفوف.',
      allErrors: 'فشل الاستيراد. لا توجد صفوف صالحة.',
    },
    form: {
      downloadTemplate: 'قم بتنزيل النموذج',
      hint: 'انقر أو اسحب الملف إلى هذه المنطقة للمتابعة',
    },
    list: {
      discardConfirm:
        'هل أنت واثق؟ ستفقد البيانات غير المستوردة.',
    },
    errors: {
      invalidFileEmpty: 'الملف فارغ',
      invalidFileExcel: 'يُسمح فقط بملفات Excel (.xlsx)',
      invalidFileUpload:
        'ملف غير صالح. تأكد من أنك تستخدم الإصدار الأخير من النموذج.',
      importHashRequired: 'مطلوب استيراد تجزئة',
      importHashExistent: 'تم بالفعل استيراد البيانات',
    },
  },

  autocomplete: {
    loading: 'جار التحميل...',
  },

  imagesViewer: {
    noImage: 'لا توجد صورة',
  },
};

export default ar;
