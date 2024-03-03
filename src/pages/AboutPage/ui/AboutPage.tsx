import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

function AboutPage() {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('О нас')}
        </div>
    );
}
export default AboutPage;
