// Privacy and Terms are the operator's texts, pasted here VERBATIM from the documents
// supplied by the owner. Only markup changed: "## " headings (the leading "N." is dropped
// because the page numbers sections itself), "### " subheadings, "- " lists.
// The documents carry no effective date, so legalUpdated stays PLACEHOLDER and no date is shown.

import { PLACEHOLDER } from "./site";

export type LegalDoc = {
  title: string;
  current: string;
  updated?: string;
  body: string | null;
  glance?: [string, string][];
  other: { to: string; label: string };
};

export const legalUpdated = PLACEHOLDER;

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  current: "privacy",
  glance: [
    ["No account", "The app does not require an account or a login."],
    ["Your photos", "Only photos you choose are used, and only for the feature you picked."],
    ["No ad tracking", "Prompts, photos and generated content are not used for behavioral advertising."],
  ],
  body: `This Privacy Policy explains how information is handled when you use the mobile application ("App").

The App is independently developed and operated by Ward Ridder pursuant to a signed commercial authorization agreement with Artlist Ltd. that permits the development, distribution, operation, marketing, commercialization, and authorized branding of the App.

This Privacy Policy applies specifically to information handled in connection with this App.

## App Operator and Authorization

The App is operated by:

Ward Ridder
Krukmakargatan 54
Stockholm
Sweden

Ward Ridder operates the App under a valid signed commercial authorization granted by Artlist Ltd.

The authorization permits, within its agreed scope, development, publication, distribution, operation, maintenance, updating, marketing, monetization, and the use of the Artlist name, related word marks, and authorized brand elements in connection with the App.

The authorization also permits use of authorized branding in App Store metadata, screenshots, websites, promotional materials, advertising, social media, customer support materials, and user interfaces.

Artlist Ltd. retains ownership of its trademarks, trade names, logos, brand assets, and other applicable intellectual property.

The commercial authorization does not mean that Artlist Ltd. directly operates the App or independently controls personal information processed by Ward Ridder for the operation of the App, except to the extent information may separately be processed by an Artlist-related or other third-party service where applicable.

## Information We Handle

The App does not require you to create an account or provide personal profile information.

Depending on the features you choose to use, the App may process the following information.

### Text Prompts

When you request AI-generated content, the text prompts and instructions you enter are processed to create the requested image, video, animation, or other output.

Prompts may be transmitted to third-party AI service providers solely as necessary to perform the generation request initiated by you.

You should avoid entering confidential, highly sensitive, or unnecessary personal information in prompts.

### Photos and Images

If you choose to create content using an existing photo or image, you may select media from your device's photo library.

Selected media is accessed only when you choose to use it with a feature that requires such content.

The selected content may be transmitted to an AI service provider when necessary to process your request and generate the requested output.

The App does not automatically upload your entire photo library.

### Generated Content

Images and videos generated through the App may be stored locally on your device so that you can view and manage your creations.

We do not operate a user account system or a personal cloud gallery for storing generated content on your behalf.

## Photo Library Access

The App may request permission to access your photo library when you choose to import a photo or image.

This permission is used only to allow you to select media for supported creative functionality.

The App does not use photo library permission to automatically collect, scan, or upload your entire media library.

You may modify or revoke photo access at any time through your device's privacy settings.

## AI Processing

The App relies on third-party artificial intelligence technologies to provide image, video, animation, and related generation functionality.

When you initiate a generation request, information required to perform that request may be transmitted to a relevant AI service provider.

Depending on the selected feature, this may include:

- Text prompts;
- Images or photographs selected by you;
- Generation parameters;
- Technical instructions necessary to perform the requested generation.

This information is transmitted only as necessary to perform the function initiated by you.

Third-party AI providers may process information according to their own privacy, security, and retention practices.

The commercial authorization from Artlist Ltd. does not transfer ownership of third-party AI models, technologies, platforms, or other third-party intellectual property.

You should not submit information that is confidential, highly sensitive, or unnecessary for the generation request.

## Relationship With Artlist Ltd.

The App is commercially authorized by Artlist Ltd. under a signed agreement, including authorization for development, distribution, operation, marketing, monetization, and the use of the Artlist name and related trademarks and authorized brand elements within the agreed scope.

The authorization is non-exclusive and worldwide and applies for the term specified in the underlying agreement.

The authorization does not, by itself, mean that information processed through the App is transmitted to or controlled by Artlist Ltd.

Information is disclosed to Artlist Ltd. or any other third party only where necessary for a specific App function, subscription management, legal obligation, or another purpose described in this Privacy Policy.

## Local Storage

Certain information may be stored locally on your device, including:

- Generated images;
- Generated videos;
- Information required to display and manage generated content within the App;
- Certain App preferences or technical settings.

Locally stored content generally remains on your device unless you choose to export, share, or otherwise transmit it.

Deleting the App, clearing application data, or certain device-level actions may permanently remove locally stored content.

## Subscriptions and Purchases

The App may offer subscriptions or other in-app purchases.

Purchases are processed through Apple's App Store.

We do not directly receive or store your complete payment card or banking information.

A third-party subscription management service may process limited technical purchase and subscription information necessary to:

- Verify purchase status;
- Determine subscription entitlement;
- Restore purchases;
- Determine renewal or expiration status;
- Provide access to premium functionality.

Such information is not used by us for behavioral advertising.

## No Account Registration

The App does not require account registration or login.

We do not require you to provide a username, password, personal profile, or email address in order to access the App's core functionality.

## No Advertising Tracking

The App is not designed to use your prompts, selected photos, generated content, or subscription information for behavioral advertising.

We do not sell your personal information to advertisers.

We do not use information described in this Privacy Policy to track you across applications and websites owned by other companies for advertising purposes.

## Sharing of Information

Information may be disclosed only where reasonably necessary to provide, operate, secure, or support the App.

This may include disclosure to:

- AI service providers that process generation requests;
- Subscription and purchase management providers;
- Apple in connection with App Store purchases and platform functionality;
- Technical service providers where necessary for operation of a requested feature;
- Authorities or other parties where disclosure is required by applicable law or valid legal process.

We do not sell or rent your prompts, uploaded media, or generated content.

## Data Retention

Generated content stored locally remains on your device until you delete it, clear application data, or uninstall the App.

We do not maintain a backend database containing user accounts or a cloud-based personal library of your generated content.

Information transmitted to third-party services for AI processing, subscription management, or technical operations may be retained according to the applicable provider's own policies and technical requirements.

Where we directly control information, we retain it only for as long as reasonably necessary for the purpose for which it was processed or as required by applicable law.

## Data Security

We use reasonable administrative and technical measures intended to protect information handled through the App.

However, no electronic transmission, device storage system, or third-party processing service can be guaranteed to be completely secure.

You should therefore avoid including confidential, highly sensitive, or unnecessary personal information in prompts or uploaded media.

## Children's Privacy

The App is not intended to knowingly collect personal information from children in violation of applicable privacy laws.

If you are a parent or legal guardian and believe that a child has provided personal information through the App in a manner that violates applicable law, please contact us.

## Your Choices

Depending on the functionality you use, you may:

- Decide whether to provide photo library access;
- Select which individual photos or images you wish to use;
- Remove permission to access photos through device settings;
- Delete locally stored generated content;
- Manage or cancel subscriptions through your Apple ID settings;
- Stop using the App and remove it from your device.

Where applicable law provides additional privacy rights, you may contact us regarding those rights using the information below.

## International Processing

Third-party service providers used to perform AI generation, subscription management, or other technical functionality may process information in countries or regions other than the one where you live.

Where required by applicable law, information is handled subject to applicable privacy and data protection requirements.

## Intellectual Property and Brand Authorization

The Artlist name, related trademarks, trade names, logos, and associated brand elements remain the property of Artlist Ltd. and/or their respective rights holders.

Their appearance within the App and related App Store materials, websites, promotional materials, advertising, social media, customer support materials, and user interfaces is authorized pursuant to the signed commercial agreement between Artlist Ltd. and Ward Ridder.

This Privacy Policy does not grant users any independent right to reproduce, use, modify, or distribute those trademarks or brand assets.

## Changes to This Privacy Policy

We may update this Privacy Policy to reflect changes to:

- The App or its functionality;
- AI or technical service providers;
- Subscription functionality;
- Legal or regulatory requirements;
- Our information-handling practices;
- Applicable commercial authorization arrangements.

Any updated version will become effective when it is made available through the App or otherwise communicated to users where required by applicable law.

## Contact Us

If you have questions about this Privacy Policy, the App's privacy practices, or information handled through the App, please contact:

Ward Ridder
Krukmakargatan 54
Stockholm
Sweden

Email: ward@ridder.world
`,
  other: { to: "/terms", label: "Terms of Use" },
};

export const terms: LegalDoc = {
  title: "Terms of Use",
  current: "terms",
  glance: [
    ["Subscriptions", "Paid through the App Store and managed in your Apple ID settings."],
    ["AI results", "Results can be unexpected. Review them before you use them."],
    ["Operator", "Ward Ridder runs the app under a commercial authorization from Artlist Ltd."],
  ],
  body: `These Terms of Use ("Terms") govern your access to and use of the mobile application ("App"). By downloading, accessing, or using the App, you agree to these Terms. If you do not agree with these Terms, please do not use the App.

## About the App

The App provides AI-powered creative tools that allow users to generate images, videos, animations, and other creative content from text prompts, uploaded photos, and other user-provided input.

The App is independently developed, distributed, operated, maintained, and commercially offered by Ward Ridder under a signed commercial authorization agreement with Artlist Ltd.

Under that agreement, Ward Ridder is authorized, within its agreed scope, to develop, publish, distribute, operate, maintain, update, market, and monetize the App and to use the Artlist name and related trademarks and authorized brand elements in connection with the App.

AI-generated results may vary depending on the input, selected settings, available technology, and other factors. The App does not guarantee that generated content will always match a user's prompt or expectations.

## Commercial Authorization

The development and commercial distribution of the App are carried out pursuant to a signed authorization granted by Artlist Ltd. to Ward Ridder.

Within the scope of that authorization, Ward Ridder is permitted to:

- Develop, publish, distribute, operate, maintain, and update the App;
- Distribute the App through the Apple App Store and other legitimate digital distribution platforms;
- Use the Artlist name, related word marks, and authorized brand elements in connection with the App;
- Use authorized branding in App Store metadata, screenshots, websites, promotional materials, advertising, social media, customer support materials, and user interfaces;
- Operate AI-powered image, video, animation, and other creative functionality;
- Monetize the App through subscriptions, in-app purchases, and other lawful methods;
- Engage developers, designers, service providers, and other contractors as reasonably necessary to develop, maintain, support, and operate the App.

The authorization is non-exclusive and worldwide and is granted for the term specified in the underlying authorization agreement.

The authorization does not transfer ownership of Artlist's trademarks, trade names, logos, brand assets, or other intellectual property to Ward Ridder. Those rights remain with Artlist Ltd. and their respective rights holders.

## Eligibility

You may use the App only if you are legally permitted to enter into these Terms under the laws applicable to you.

If you are under the age required to provide consent in your jurisdiction, you should use the App only with the involvement and permission of a parent or legal guardian.

## User Content

You may provide text prompts, photographs, images, and other materials to create content through the App ("User Content").

You retain any rights you may have in your User Content.

By submitting User Content for generation or processing, you grant the limited rights necessary to transmit, process, and use that content solely for providing the functionality you requested.

You are responsible for ensuring that you have all necessary rights, permissions, and lawful grounds to use any material you submit to the App.

## AI-Generated Content

Content generated using the App is created automatically using artificial intelligence technologies.

Generated results may be unexpected, inaccurate, incomplete, or similar to content generated for other users.

You are responsible for reviewing generated content before using, publishing, distributing, licensing, or otherwise relying on it.

The App does not guarantee that generated content is unique or that it qualifies for copyright, trademark, patent, or other intellectual property protection in any jurisdiction.

You are also responsible for ensuring that your use of generated content does not violate the rights of third parties or applicable law.

## Acceptable Use

You agree not to use the App to:

- Violate applicable laws or regulations;
- Infringe copyrights, trademarks, privacy rights, publicity rights, or other rights of third parties;
- Submit material that you do not have permission to use;
- Create or distribute unlawful, fraudulent, threatening, abusive, or intentionally harmful material;
- Create misleading or unlawful impersonations of other persons;
- Attempt to interfere with, disrupt, reverse engineer, compromise, or misuse the App or its underlying services;
- Circumvent technical restrictions, subscription limitations, content safeguards, or security mechanisms;
- Use the App in a way that may harm other users, third parties, Artlist Ltd., Ward Ridder, or the operation of the service.

Access to certain functionality may be restricted where reasonably necessary to prevent misuse, comply with legal obligations, protect intellectual property rights, or maintain the security and integrity of the App.

## Intellectual Property and Trademarks

The App, including its software, interface, design, graphics, written materials, functionality, and other proprietary elements, is protected by applicable intellectual property laws.

The Artlist name and related trademarks, trade names, logos, brand elements, and associated intellectual property remain the property of Artlist Ltd. and/or their respective rights holders.

Use of the Artlist name and related trademarks within the App, its App Store listing, promotional materials, websites, user interface, customer support materials, and related services is made pursuant to the signed commercial authorization granted by Artlist Ltd.

Ward Ridder retains the rights, if any, that he lawfully holds in the App's code, implementation, interface, and technical infrastructure, subject to the rights of Artlist Ltd. and applicable third-party rights.

Nothing in these Terms transfers ownership of the Artlist brand or any associated intellectual property to the user.

You may not copy, reproduce, imitate, modify, or use Artlist trademarks or other protected brand elements outside the ordinary use of the App without separate authorization from the applicable rights holder.

## Independent Operation

The App is independently developed, distributed, operated, and supported by Ward Ridder pursuant to the signed commercial authorization described in these Terms.

Ward Ridder is responsible for the App's development, operation, user support, platform compliance, privacy disclosures, content policies, subscriptions, in-app purchases, and other operational matters, except where a separate written agreement expressly provides otherwise.

Nothing in these Terms should be interpreted as transferring operational responsibility for the App to Artlist Ltd. Artlist Ltd. is not responsible for end-user support, refunds, subscription administration, or the developer account through which the App is distributed unless separately agreed in writing.

## Subscriptions and Purchases

Certain features may require a paid subscription or other in-app purchase.

Prices, subscription periods, trial availability, and other purchase details are displayed before confirmation of a transaction.

Payments are processed through Apple's App Store and are subject to Apple's applicable payment terms.

Subscriptions may automatically renew unless canceled in accordance with the subscription settings and rules of the App Store.

You can manage or cancel your subscription through your Apple ID subscription settings.

Refund requests are handled according to Apple's applicable policies.

Third-party subscription management technology may be used to determine purchase status, subscription entitlements, renewals, and access to premium functionality.

## Third-Party AI and Technical Services

Some App functionality relies on third-party artificial intelligence, technical, infrastructure, and subscription management providers.

When necessary to provide a requested feature, information such as prompts, selected images, generation parameters, or other user-selected content may be transmitted to the relevant service provider for processing.

Such processing is performed only as necessary to provide the functionality initiated by the user.

The commercial authorization from Artlist Ltd. concerns the App, its distribution, authorized branding, and related commercial use. It does not transfer ownership of third-party AI models, technologies, platforms, or other third-party intellectual property.

Availability and performance of third-party services are outside our direct control, and functionality may occasionally be interrupted, modified, delayed, or unavailable.

## Storage and Device Content

Generated images and videos may be stored locally on your device.

You are responsible for maintaining appropriate backups of content you wish to preserve.

Removing the App, clearing application data, replacing your device, or performing certain device-level actions may result in the loss of locally stored content.

## Availability and Changes

We may modify, update, suspend, or discontinue features of the App when reasonably necessary for technical, operational, security, commercial, intellectual property, or legal reasons.

We do not guarantee uninterrupted or error-free availability of the App or any particular AI generation functionality.

## Disclaimer

The App and its functionality are provided on an "as is" and "as available" basis to the maximum extent permitted by applicable law.

AI-generated results are produced automatically and may contain errors, artifacts, unexpected elements, or unsuitable material.

You should independently review generated content before using it for any professional, commercial, public, legal, financial, or otherwise important purpose.

The existence of a commercial authorization from Artlist Ltd. does not constitute a guarantee by Artlist Ltd. regarding any particular AI-generated output, user activity, technical result, or operational result of the App.

## Limitation of Liability

To the maximum extent permitted by applicable law, Ward Ridder will not be liable for indirect, incidental, special, consequential, exemplary, or similar damages arising from your use of or inability to use the App, including loss of content, data, revenue, business opportunities, or anticipated savings.

Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law.

## Termination

You may stop using the App at any time.

We may restrict or terminate access to the App or particular features where reasonably necessary because of misuse, violation of these Terms, security concerns, intellectual property concerns, legal requirements, or circumstances affecting operation of the service.

## Changes to These Terms

We may update these Terms periodically to reflect changes to the App, applicable laws, third-party technologies, authorization arrangements, or our practices.

Any updated version will become effective when it is made available through the App or otherwise communicated to users where required by applicable law.

Continued use of the App after an update constitutes acceptance of the revised Terms where permitted by applicable law.

## Governing Law

These Terms are governed by applicable law, subject to any mandatory consumer protection rights available to you in your country or region.

Nothing in these Terms limits any mandatory rights that cannot legally be excluded or restricted.

## Contact Us

The App is operated by:

Ward Ridder
Krukmakargatan 54
Stockholm
Sweden

For questions about the App or these Terms, please contact:

Email: ward@ridder.world
`,
  other: { to: "/privacy", label: "Privacy Policy" },
};
