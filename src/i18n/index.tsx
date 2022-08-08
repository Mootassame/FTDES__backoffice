import React from 'react';
import _get from 'lodash/get';
import moment from 'moment';
import { setLocale as setYupLocale } from 'yup';

let currentLanguageCode = '';

const languages: {
  [key: string]: {
    id: string;
    label: string;
    flag: string;
    antd: any;
    dictionary: any;
  };
} = {
  en: {
    id: 'en',
    label: 'English',
    flag: '/images/flags/United-States.png',
    antd: null,
    dictionary: null,
  },
  fr: {
    id: 'fr',
    label: 'Français',
    flag: '/images/flags/France.png',
    antd: null,
    dictionary: null,
  },
  ar: {
    id: 'ar',
    label: 'العربية',
    flag: '/images/flags/Saudi-Arabia.png',
    antd: null,
    dictionary: null,
  },
};

export async function init() {
  currentLanguageCode =
    localStorage.getItem('language') || 'fr';
  setLanguageCode(currentLanguageCode);

  if (currentLanguageCode === 'en') {
    await initEn();
  }

  if (currentLanguageCode === 'ar') {
    await initAr();
  }

  if (currentLanguageCode === 'fr') {
    await initFr();
  }
}

async function initAr() {
  const language = languages['ar'];

  // @ts-ignore
  const momentLocale = (await import('moment/locale/ar'))
    .default;

  language.antd = (
    await import('antd/lib/locale-provider/ar_EG')
  ).default;

  language.dictionary = (
    await import('src/i18n/ar')
  ).default;

  moment.locale('ar', momentLocale);

  if (language.dictionary.validation) {
    setYupLocale(language.dictionary.validation);
  }

  return language;
}

async function initFr() {
  const language = languages['fr'];

  // @ts-ignore
  const momentLocale = (await import('moment/locale/fr'))
    .default;

  language.antd = (
    await import('antd/lib/locale-provider/fr_FR')
  ).default;

  language.dictionary = (
    await import('src/i18n/fr')
  ).default;

  moment.locale('fr', momentLocale);

  if (language.dictionary.validation) {
    setYupLocale(language.dictionary.validation);
  }

  return language;
}

async function initEn() {
  const language = languages['en'];

  language.dictionary = (
    await import('src/i18n/en')
  ).default;

  if (language.dictionary.validation) {
    setYupLocale(language.dictionary.validation);
  }

  return language;
}

function getLanguage() {
  return languages[getLanguageCode()];
}

function format(message, args) {
  if (!message) {
    return null;
  }

  try {
    return message.replace(
      /{(\d+)}/g,
      function (match, number) {
        return typeof args[number] != 'undefined'
          ? args[number]
          : match;
      },
    );
  } catch (error) {
    console.error(message, error);
    throw error;
  }
}

export function getLanguages() {
  return Object.keys(languages).map((language) => {
    return languages[language];
  });
}

export function getAntdLanguage() {
  return getLanguage().antd;
}

export function getLanguageCode() {
  return currentLanguageCode;
}

export function setLanguageCode(arg) {
  if (!languages[arg]) {
    throw new Error(`Invalid language ${arg}.`);
  }

  localStorage.setItem('language', arg);
}

export function i18nExists(key) {
  if (!getLanguage()) {
    return false;
  }

  const message = _get(getLanguage().dictionary, key);
  return Boolean(message);
}

export function i18n(key, ...args) {
  if (!getLanguage()) {
    return key;
  }

  const message = _get(getLanguage().dictionary, key);

  if (!message) {
    return key;
  }

  return format(message, args);
}

export function i18nHtml(key, ...args) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: i18n(key, ...args),
      }}
    />
  );
}
