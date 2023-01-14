import styles from "./PrivacyPolicy.module.css";
import pkg from "../../package.json";

export const PrivacyPolicy = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Privacy Policy</h1>
      <p className={styles.description}>
        This privacy policy (the &quot;Policy&quot;) describes how{" "}
        {pkg.company.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
        collects, uses, and shares information about you when you use our
        website, including any other media form, media channel, mobile website,
        or mobile application related or connected thereto (collectively, the
        &quot;Site&quot;).
      </p>
      <p className={styles.description}>
        By using the Site, you agree to the collection, use, and sharing of your
        information as described in this Policy. If you do not agree with our
        policies and practices, do not use the Site.
      </p>
      <h2>Information We Collect</h2>
      <p className={styles.description}>
        We may collect information about you in a variety of ways. The
        information we may collect on the Site includes:
      </p>
      <ul className={styles.description} style={{ listStyleType: "disc" }}>
        <li>
          Personal data, such as your name, email address, postal address, phone
          number, and other contact information
        </li>
        <li>Demographic data, such as your age, gender, and interests</li>
        <li>Other data, such as your location, IP address, and browser type</li>
      </ul>
      <p className={styles.description}>
        We may also collect information about you through social media sites you
        use to access our Site. The information we collect may depend on the
        privacy settings you have with the social media site and the permissions
        you have given for us to access your information.
      </p>
      <h2>How We Use Your Information</h2>
      <p className={styles.description}>
        We may use the information we collect from you when you use the Site for
        the following purposes:
      </p>
      <ul className={styles.description} style={{ listStyleType: "disc" }}>
        <li>
          To personalize your experience and to allow us to deliver the type of
          content and product offerings in which you are most interested
        </li>
        <li>
          To improve the Site and to allow us to better understand how users
          access and use the Site
        </li>
        <li>
          To allow us to better service you in responding to your customer
          service requests
        </li>
        <li>
          To administer a contest, promotion, survey, or other Site feature
        </li>
        <li>To send periodic emails regarding our products or services</li>
      </ul>
      <h2>Sharing of Your Information</h2>
      <p className={styles.description}>
        We may share your information with third parties for the following
        purposes:
      </p>
      <ul className={styles.description} style={{ listStyleType: "disc" }}>
        <li>To provide the services you have requested</li>
        <li>To comply with legal obligations</li>
        <li>
          To protect the rights and safety of our customers and third parties
        </li>
        <li>
          To detect, prevent, or otherwise address fraud, security, or technical
          issues
        </li>
      </ul>
      <p className={styles.description}>
        We may also share your information with third parties in order to
        provide you with targeted advertisements or marketing communications.
      </p>
      <h2>International Transfer</h2>
      <p className={styles.description}>
        Your information may be transferred to and maintained on servers or
        databases located outside your jurisdiction. If you are located outside{" "}
        {pkg.company.country} and choose to provide your information to us,
        please be aware that we may transfer your information to{" "}
        {pkg.company.country} and process it there.
      </p>
      <h2>Your Rights</h2>
      <p className={styles.description}>
        You have the right to access, update, and delete your personal data at
        any time. You also have the right to object to the processing of your
        personal data and the right to request the restriction of processing of
        your personal data. You also have the right to data portability, which
        allows you to obtain a copy of your personal data in a structured,
        machine-readable format.
      </p>
      <p className={styles.description}>
        If you would like to exercise any of these rights, please contact us.
      </p>
      <h2>Data Retention</h2>
      <p className={styles.description}>
        We will retain your personal data for as long as necessary to provide
        you with the services you have requested or for as long as we have a
        legitimate interest in using your data. We may also retain your personal
        data for as long as necessary to comply with our legal obligations,
        resolve disputes, and enforce our agreements.
      </p>
      <h2>Changes to Our Privacy Policy</h2>
      <p className={styles.description}>
        We may update our privacy policy from time to time. We encourage you to
        review the privacy policy whenever you access the Site to stay informed
        about our information practices and the choices available to you.
      </p>
      <h2>Contact Us</h2>
      <p className={styles.description}>
        If you have any questions about this privacy policy, please contact us.
      </p>
      <p className={styles.description}>
        Effective {pkg.termsOfService.effectiveDate}
      </p>
    </div>
  );
};
