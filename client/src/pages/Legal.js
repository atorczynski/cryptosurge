import React from 'react';
import styled from '@emotion/styled';

const LegalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
`;

const LegalHeading = styled.h1`
  text-align: center;
`;
const TextBlock = styled.div`
  width: 50%;
`;

const LegalTextHeading = styled.h2``;

const LegalText = styled.p`
  text-align: start;
  font-size: 16px;
`;

const LegalParagraphList = styled.ol`
  list-style-type: lower-roman;
`;

const LegalParagraph = styled.li`
  font-size: 14px;
`;

const LegalUnorderdList = styled.ul``;

const LegalUnorderdListParagraph = styled.li`
  list-style-type: circle;
`;

export default function Legal() {
  return (
    <LegalContainer>
      <TextBlock>
        <LegalHeading>Privacy and Cookie Policy</LegalHeading>
        <br />
        <br />
        <LegalText>
          At Cryptodash.io, we’re committed to protecting and respecting your
          privacy. This Privacy and Cookie Policy (“Privacy Policy”) govern your
          access to and use of this Website, Cryptodash.io (the “Website”), and
          associated content, software, and mobile applications (collectively,
          the “Service”). This Privacy Policy also includes our Terms of Use
          which is located at https://Cryptodash.io/terms.
          <br />
          <br />
          <br />
          This Privacy Policy explains when and why we collect personal
          information about people who visit our Website or use our Services and
          how we use the personal information, the conditions under which we may
          disclose your personal information to others, and how we keep personal
          information secure. This Privacy Policy also explains how we use
          cookies and similar technology on our Website and in connection with
          our Services.
          <br />
          <br />
          <br />
          We may change this Privacy Policy from time to time so please check
          this page occasionally to ensure that you are happy with any changes.
          By using our Website or our Services, you are agreeing to be bound by
          this Privacy Policy.
        </LegalText>
      </TextBlock>
      <br />
      <br />
      <TextBlock>
        <LegalTextHeading>What Information Do We Collect?</LegalTextHeading>
        <LegalText>
          Cryptodash.io (“Cryptodash.io”, “we” or “us”) collects (a) the e-mail
          addresses of those who communicate with us via e-mail; (b) aggregate
          information concerning what pages users access or visit; (c)
          information volunteered by the user (such as survey information and/or
          site registrations); (d) financial information provided by the user
          for user syncing and information purposes only; and (e) information
          related to your use of the Website and/or the mobile application,
          including IP address, geographic location, and date and time of your
          request.
        </LegalText>
      </TextBlock>

      <TextBlock>
        <br />
        <br />
        <LegalTextHeading>How Do We Use the Information?</LegalTextHeading>
        <LegalText>
          Cryptodash.io uses collected information for the following purposes:
        </LegalText>

        <LegalParagraphList>
          <LegalParagraph>
            To fulfill a contract or take steps linked to a contract such as
            processing your registration on our Website or sending you
            information about changes to our terms or policies;
          </LegalParagraph>
          <br />
          <LegalParagraph>
            Where it is necessary for purposes which are in Cryptodash.io’s or
            third parties’ legitimate interests such as (a) to provide the
            information or content you have requested; (b) to contact you about
            our programs, products, features or services; (c) for internal
            business purposes such as identification and authentication or
            customer service, portfolio tracking and user preference syncing
            between devices; (d) to ensure the security of our Website, by
            trying to prevent unauthorized or malicious activities; (e) to
            enforce compliance with our Terms of Use and other policies; (f) to
            help other organizations (such as copyright owners) to enforce their
            rights; and (g) to tailor content, advertisements, and offers for
            you or for other purposes disclosed at the time of collection. If
            you do not wish to receive marketing information about our programs,
            products, features or services, you may send an email to us at
            legal@Cryptodash.io.
          </LegalParagraph>
          <br />
          <LegalParagraph>
            Where you give us consent, such as (a) where you ask us to send
            marketing information to you via a medium where we need your
            consent, including alerts via mobile push notifications; (b) where
            you give us consent to place cookies and to use similar
            technologies; and (c) on other occasions where we ask you for
            consent, for a purpose which we explain at that time.
          </LegalParagraph>
          <br />
          <LegalParagraph>
            Where we are legally required to do so. We may also provide access
            to your personally identifiable information when legally required to
            do so, to cooperate with police investigations or other legal
            proceedings, to protect against misuse or unauthorized use of our
            Website, to limit our legal liability and protect our rights, or to
            protect the rights, property or safety of visitors of the Website or
            the public. In those instances, the information is provided only for
            that purpose.
          </LegalParagraph>
        </LegalParagraphList>
        <br />
        <br />
        <LegalTextHeading>How Do We Share Your Information?</LegalTextHeading>
        <LegalText>
          We do not share or sell your personal data to other organizations for
          commercial purposes, except to provide products or services you’ve
          requested, when we have your permission, or under the following
          circumstances:
        </LegalText>

        <LegalParagraphList>
          <LegalParagraph>
            It is necessary to share information in order to investigate,
            prevent, or take action regarding illegal activities, suspected
            fraud, situations involving potential threats to the physical safety
            of any person, violations of Terms of Service, or as otherwise
            required by law.
          </LegalParagraph>
          <br />
          <LegalParagraph>
            We transfer information about you if Cryptodash.io is acquired by or
            merged with another company. In this event, Cryptodash.io will
            notify you before information about you is transferred and becomes
            subject to a different privacy policy.
          </LegalParagraph>
          <br />
          <LegalParagraph>
            We provide such information to trusted businesses or persons for the
            sole purpose of processing personally identifying information on our
            behalf. When this is done, it is subject to agreements that oblige
            those parties to process such information only on our instructions
            and in compliance with this Privacy Policy and appropriate
            confidentiality and security measures.
          </LegalParagraph>
          <br />
          <LegalParagraph>
            We provide such information to third parties who have entered into
            non-disclosure agreements with us.
          </LegalParagraph>
          <br />
          <LegalParagraph>
            We provide such information to a company controlled by, or under
            common control with, Cryptodash.io for any purpose permitted by this
            Privacy Policy.
          </LegalParagraph>
          <br />
          <LegalParagraph>
            We may aggregate, anonymize, and publish data for statistical and
            research purposes only. For example, we may compile and share
            information related to the popularity of certain products tracked by
            users. In any such instance, the information will not be able to be
            traced back to any individual.
          </LegalParagraph>
        </LegalParagraphList>
        <br />
        <br />
        <LegalTextHeading>Cookies and Web Beacons</LegalTextHeading>
        <LegalText>
          A cookie is a small amount of data, which often includes an anonymous
          unique identifier, which is sent to your browser from a Website’s
          computers and stored on your computer’s hard drive. Cookies are
          required to use some Cryptodash.io services. Cryptodash.io and its ad
          management partners (“Ad Partners”) use cookies to record current
          session information.
          <br />
          Our Ad Partners may also from time to time use web beacons (also known
          as Internet tags, pixel tags, and clear GIFs). These web beacons are
          provided by our Ad Partners and allow Ad Partners to obtain
          information such as the IP address of the computer that downloaded the
          page on which the beacon appears, the URL of the page on which the
          beacon appears, the time the page containing the beacon was viewed,
          the type of browser used to view the page, and the information in
          cookies set by the Ad Partners. Web beacons enable our Ad Partners to
          recognize a unique cookie on your web browser, which in turn enables
          us to learn which advertisements bring users to our Website.
          <br />
          With both cookies and web beacon technology, the information that we
          collect and share is anonymous and not personally identifiable. It
          does not contain your name, address, geographic location, telephone
          number, or e-mail address.
          <br />
          You can opt-out of Google Analytics data collection with the Google
          Analytics <br /> <br />
          <a href={'https://tools.google.com/dlpage/gaoptout/'}>
            Opt-out Browser Add-on.
          </a>
          <br />
          <br />
          You may also wish to refer to this website for additional information
          about disabling cookies from your browser: <br /> <br />
          <a href={'http://www.allaboutcookies.org/manage-cookies/'}>
            http://www.allaboutcookies.org/manage-cookies/.
          </a>
        </LegalText>
        <br />
        <br />
        <LegalTextHeading>Data Storage</LegalTextHeading>
        <LegalText>
          Cryptodash.io uses third-party vendors and hosting partners to provide
          the necessary hardware, software, networking, storage, and related
          technology required to run Cryptodash.io and the related Website and
          mobile application. Cryptodash.io owns the code, databases, and all
          rights to the Cryptodash.io Website and mobile application and
          Services.
        </LegalText>
        <br />
        <br />
        <LegalTextHeading>Security</LegalTextHeading>
        <LegalText>
          We take precautions to ensure the security of your personal
          information. However, we cannot guarantee that hackers or unauthorized
          personnel may gain access to your personal information despite our
          efforts. You should note that in using the Cryptodash.io service, your
          information will travel over the Internet and through third-party
          infrastructures and mobile networks, which are not under our control.
          <br />
          We cannot protect, nor does this Privacy Policy apply to, any
          information that you transmit to other users. You should never
          transmit personal or identifying information to other users.
        </LegalText>
        <br />
        <br />
        <LegalTextHeading>
          Retention of Your Personal Information
        </LegalTextHeading>
        <LegalText>
          We retain information as long as it is necessary to provide the
          Services requested by you and others, subject to any legal obligations
          to further retain such information. Information associated with your
          account will generally be kept until it is no longer necessary to
          provide the Services or until you ask us to delete it or your account
          is deleted, whichever comes first. Additionally, we may retain
          information from deleted accounts to comply with the law, prevent
          fraud, resolve disputes, troubleshoot problems, assist with
          investigations, enforce the Terms of Use, and take other actions
          permitted by law. The information we retain will be handled in
          accordance with this Privacy Policy.
          <br />
          Information about you that is no longer necessary and relevant to
          provide our Services may be de-identified and aggregated with other
          non-personal data to provide insights which are commercially valuable
          to Cryptodash.io, such as statistics related to the use of
          Cryptodash.io’s Website and application.
        </LegalText>
        <br />
        <br />
        <LegalTextHeading>Children</LegalTextHeading>
        <LegalText>
          The Cryptodash.io service is not intended for children under the age
          of 16, and we do not knowingly collect information from children under
          the age of 16.
          <br />
          Children aged 16 or younger should not submit any personal information
          without the permission of their parents or guardians. By using the
          Cryptodash.io service, you are representing that you are at least 18
          years old, or that you are at least 16 years old and have your
          parents’ or guardians’ permission to use the Service.
        </LegalText>
        <br />
        <br />
        <LegalTextHeading>EU and EEA Users’ Rights</LegalTextHeading>
        <LegalText>
          If you are habitually located in the European Union or European
          Economic Area, you generally have the right to access, rectify,
          download or erase your information, as well as the right to restrict
          and object to certain processing of your information. While some of
          these rights apply generally, certain rights apply only in certain
          limited circumstances. We briefly describe these rights below:
          <br />
          You have the right to access your personal data and, if necessary,
          have it amended, deleted or restricted. In certain instances, you may
          have the right to the portability of your data. You can also ask us to
          not send marketing communications and not to use your personal data
          when we carry out profiling for direct marketing purposes. You can opt
          out of receiving e-mail newsletters and other marketing communications
          by following the opt-out instructions provided to you in those
          e-mails. Transactional account messages will be unaffected even if you
          opt out from marketing communications.
        </LegalText>
        <br />
        <br />
        <LegalTextHeading>Complaints</LegalTextHeading>
        <LegalText>
          Should you wish to raise a concern about our use of your information
          (and without prejudice to any other rights you may have), you have the
          right to do so with your local supervisory authority, although we hope
          that we can assist with any queries or concerns you may have about our
          use of your personal data.
        </LegalText>
        <br />
        <br />
        <LegalTextHeading>Your California Privacy Rights</LegalTextHeading>
        <LegalText>
          California Consumer Privacy Act (CCPA)
          <br />
          <br />
          In the last twelve months, Cryptodash.io may have collected, used, and
          shared, for business purposes, personal information about you as
          described in this Privacy Policy. Each category of data may be used by
          Cryptodash.io or shared with third parties also as described in this
          Privacy Policy. Residents of California have the right to request
          access to and deletion of the information Cryptodash.io holds about
          them. Such requests may be submitted by email to legal@Cryptodash.io.
          Cryptodash.io will not sell your personal information without your
          consent. Cryptodash.io will not discriminate against you for
          exercising your rights under CCPA. Specifically, we will not:
          <br />
          <LegalUnorderdList>
            <LegalUnorderdListParagraph>
              Deny access to our Services;
            </LegalUnorderdListParagraph>
            <LegalUnorderdListParagraph>
              Charge a different rate for the use of our Services;
            </LegalUnorderdListParagraph>
            <LegalUnorderdListParagraph>
              Provide a different quality of service.
            </LegalUnorderdListParagraph>
          </LegalUnorderdList>
        </LegalText>
        <br />
        <br />
        <LegalTextHeading>Changes</LegalTextHeading>
        <LegalText>
          Cryptodash.io may periodically update this policy. We may notify you
          about significant changes in the way we treat personal information by
          placing a prominent notice on our Website so please check back
          occasionally to ensure that you agree with the changes. If you do not,
          do not use the Website, the application or our Services.
        </LegalText>
        <br />
        <br />
        <LegalTextHeading>Questions</LegalTextHeading>
        <LegalText>
          Any questions about this Privacy Policy should be addressed to this
          e-mail address: legal@Cryptodash.io
        </LegalText>
      </TextBlock>
    </LegalContainer>
  );
}
