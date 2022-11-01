import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import {COLORS} from "../../variables/colors";

export const get_terms_of_services_articles = (data, handleOpenUrl) => {
    return [
        {
            title: {
                ar: () => <Text style={styles.articleTitleTextStyle}>{"الموضوع"}</Text>,
                en: () => <Text style={styles.articleTitleTextStyle}>{"Object"}</Text>,
                fr: () => <Text style={styles.articleTitleTextStyle}>{"Objet"}</Text>,
            },
            paragraphs: [
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{"   الغرض من 'شروط الاستخدام العامة' هذه هو توفير إطار قانوني لاستخدام موقع "}<Text style={styles.linkStyle} onPress={() => handleOpenUrl(data.site_url || "site_url")}>{data.site_url || "site_url"}</Text>{" وخدماته. "}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{"   The purpose of these 'general conditions of use' is to provide a legal framework for the use of the site "}<Text style={styles.linkStyle} onPress={() => handleOpenUrl(data.site_url || "site_url")}>{data.site_url || "site_url"}</Text>{" and its services."}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{"  Les présentes 'conditions générales d'utilisation' ont pour objet l'encadrement juridique de l'utilisation du site "}<Text style={styles.linkStyle} onPress={() => handleOpenUrl(data.site_url || "site_url")}>{data.site_url || "site_url"}</Text>{" et de ses services."}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  يُبرم هذا العقد بين:`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  This contract is concluded between:`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  Ce contrat est conclu entre :`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`مدير الموقع ، المشار إليه فيما يلي باسم "الناشر" ،`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`The manager of the website, hereinafter referred to as "the Publisher",`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`Le gérant du site internet, ci-après désigné « l'Éditeur »,`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`أي شخص طبيعي أو اعتباري يرغب في الوصول إلى الموقع وخدماته ، المشار إليه فيما بعد باسم "المستخدم".`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`Any natural or legal person wishing to access the site and its services, hereinafter referred to as "the User".`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`Toute personne physique ou morale souhaitant accéder au site et à ses services, ci-après appelé « l'Utilisateur ».`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`يجب قبول الشروط العامة للاستخدام من قبل أي مستخدم ، ويشكل الوصول إلى الموقع قبولًا لهذه الشروط.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`The general conditions of use must be accepted by any User, and access to the site constitutes acceptance of these conditions.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`Les conditions générales d'utilisation doivent être acceptées par tout Utilisateur, et son accès au site vaut acceptation de ces conditions.`}</Text>
                      </>
                    },
                },
            ]
        },
        {
            title: {
                ar: () => <Text style={styles.articleTitleTextStyle}>{"إشعار قانوني"}</Text>,
                en: () => <Text style={styles.articleTitleTextStyle}>{"Legal Notice"}</Text>,
                fr: () => <Text style={styles.articleTitleTextStyle}>{"Mentions légales"}</Text>,
            },
            paragraphs: [
                {
                    ar: () => {
                      return <>
                        <Text style={[styles.paragraphContentStyle, styles.paragraphContentCustomStyle]}>{`للأشخاص الاعتباريين:`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={[styles.paragraphContentStyle, styles.paragraphContentCustomStyle]}>{`For legal persons:`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={[styles.paragraphContentStyle, styles.paragraphContentCustomStyle]}>{`Pour les personnes morales :`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  يتم نشر موقع `}<Text style={styles.linkStyle} onPress={() => handleOpenUrl(data.site_url || "site_url")}>{data.site_url || "site_url"}</Text>{` من قبل شركة `}<Text style={styles.boldBlackStyle} >{data.company_legal_status || "company_legal_status"}</Text>{` ، `}<Text style={styles.boldBlackStyle} >{data.company_name || "company_name"}</Text>{`  برأس مال قدره `}<Text style={styles.boldBlackStyle} >{data.company_capital || "company_capital"}</Text>{` د.م ، التي يقع مكتبها الرئيسي في `}<Text style={styles.boldBlackStyle} >{data.company_address || "company_address"}</Text>{`.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{` The site `}<Text style={styles.linkStyle} onPress={() => handleOpenUrl(data.site_url || "site_url")}>{data.site_url || "site_url"}</Text>{` is published by the company `}<Text style={styles.boldBlackStyle} >{data.company_name || "company_name"}</Text>{`, `}<Text style={styles.boldBlackStyle} >{data.company_legal_status || "company_legal_status"}</Text>{` with a capital of `}<Text style={styles.boldBlackStyle} >{data.company_capital || "company_capital"}</Text>{` MAD, whose head office is located at `}<Text style={styles.boldBlackStyle} >{data.company_address || "company_address"}</Text>{`.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{` Le site `}<Text style={styles.linkStyle} onPress={() => handleOpenUrl(data.site_url || "site_url")}>{data.site_url || "site_url"}</Text>{` est édité par la société `}<Text style={styles.boldBlackStyle} >{data.company_name || "company_name"}</Text>{`, `}<Text style={styles.boldBlackStyle} >{data.company_legal_status || "company_legal_status"}</Text>{` au capital de `}<Text style={styles.boldBlackStyle} >{data.company_capital || "company_capital"}</Text>{` MAD, dont le siège social est situé au `}<Text style={styles.boldBlackStyle} >{data.company_address || "company_address"}</Text>{`.`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`ويمثل الشركة `}<Text style={styles.boldBlackStyle} >{data.responsable_full_name || "responsable_full_name"}</Text>{`.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`The company is represented by `}<Text style={styles.boldBlackStyle} >{data.responsable_full_name || "responsable_full_name"}</Text>{`.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`La société est représentée par `}<Text style={styles.boldBlackStyle} >{data.responsable_full_name || "responsable_full_name"}</Text>{`.`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={[styles.paragraphContentStyle, styles.paragraphContentCustomStyle]}>{`للأفراد:`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={[styles.paragraphContentStyle, styles.paragraphContentCustomStyle]}>{`For individuals:`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={[styles.paragraphContentStyle, styles.paragraphContentCustomStyle]}>{`Pour les personnes physiques :`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  يتم تحرير موقع `}<Text style={styles.linkStyle} onPress={() => handleOpenUrl(data.site_url || "site_url")}>{data.site_url || "site_url"}</Text>{` بواسطة `}<Text style={styles.boldBlackStyle} >{data.responsable_full_name || "responsable_full_name"}</Text>{`، ومقره في `}<Text style={styles.boldBlackStyle} >{data.responsable_address || "responsable_address"}</Text>{`.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  The `}<Text style={styles.linkStyle} onPress={() => handleOpenUrl(data.site_url || "site_url")}>{data.site_url || "site_url"}</Text>{` site is edited by `}<Text style={styles.boldBlackStyle} >{data.responsable_full_name || "responsable_full_name"}</Text>{`, domiciled at `}<Text style={styles.boldBlackStyle} >{data.responsable_address || "responsable_address"}</Text>{`.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  Le site `}<Text style={styles.linkStyle} onPress={() => handleOpenUrl(data.site_url || "site_url")}>{data.site_url || "site_url"}</Text>{` est édité par `}<Text style={styles.boldBlackStyle} >{data.responsable_full_name || "responsable_full_name"}</Text>{`, domicilié au `}<Text style={styles.boldBlackStyle} >{data.responsable_address || "responsable_address"}</Text>{`.`}</Text>
                      </>
                    },
                },
            ]
        },
    ];
};

export const get_terms_service_notice = (props) => {
    return {
        ar: (handleItemClicked) => {
          return <>
            <Text style={{}}>{"   بالضغط على "}</Text>
            <Text style={styles.registrationLabelStyle}>{props.registration_label}</Text>
            <Text style={{}}>{" ، فإنك توافق على "}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("terms_of_service")} testID="terms_of_service_test_id">{"شروط الخدمة"}</Text>
            <Text style={{}}>{" الخاصة بنا ، و"}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("data_use_policy")} testID="data_use_policy_test_id">{"سياسة استخدام البيانات"}</Text>
            <Text style={{}}>{" و"}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("cookie_policy")} testID="cookie_policy_test_id">{"سياسة ملفات تعريف الارتباط"}</Text>
            <Text style={{}}>{".الخاصة بنا"}</Text>
          </>
        },
        en: (handleItemClicked) => {
          return <>
            <Text style={{}}>{"   By pressing "}</Text>
            <Text style={styles.registrationLabelStyle}>{props.registration_label}</Text>
            <Text style={{}}>{", you agree to our "}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("terms_of_service")} testID="terms_of_service_test_id">{"Terms of service"}</Text>
            <Text style={{}}>{", our "}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("data_use_policy")} testID="data_use_policy_test_id">{"Data Use Policy"}</Text>
            <Text style={{}}>{" and our "}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("cookie_policy")} testID="cookie_policy_test_id">{"Cookies Policy"}</Text>
            <Text style={{}}>{"."}</Text>
          </>
        },
        fr: (handleItemClicked) => {
          return <>
            <Text style={{}}>{"   En appuyant sur "}</Text>
            <Text style={styles.registrationLabelStyle}>{props.registration_label}</Text>
            <Text style={{}}>{", vous acceptez nos "}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("terms_of_service")} testID="terms_of_service_test_id">{"Conditions d'utilisation"}</Text>
            <Text style={{}}>{", notre "}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("data_use_policy")} testID="data_use_policy_test_id">{"Politique d'utilisation des données"}</Text>
            <Text style={{}}>{" et notre "}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("cookie_policy")} testID="cookie_policy_test_id">{"Politique d'utilisation des cookies"}</Text>
            <Text style={{}}>{"."}</Text>
          </>
        },
    };
};

const styles = StyleSheet.create({
  articleTitleTextStyle: {
    fontWeight: "bold",
    fontSize: 15,
    color: COLORS.default_color,
  },
  paragraphContentStyle: {
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'justify',
  },
  paragraphContentCustomStyle: {
    marginTop: 10,
    marginBottom: 5,
  },
  registrationLabelStyle: {
    color: "#777",
    marginLeft: 5,
    marginRight: 5,
      fontWeight: "bold",
      fontSize: 15,
  },
  linkStyle: {
    color: "#0d6efd",
    marginLeft: 5,
    marginRight: 5,
      fontWeight: "bold",
      fontSize: 15,
  },
  boldBlackStyle: {
    color: "#000000",
    marginLeft: 5,
    marginRight: 5,
      fontWeight: "bold",
      fontSize: 15,
  },
  termStyle: {
    color: "#004eff",
    marginLeft: 5,
    marginRight: 5,
  },
});
