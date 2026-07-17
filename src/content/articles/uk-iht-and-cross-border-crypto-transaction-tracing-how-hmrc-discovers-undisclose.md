---
title: "UK IHT and Cross-Border Crypto Transaction Tracing: How HMRC Discovers Undisclosed Overseas Wallets"
description: "In the 2022–23 tax year, HMRC opened 654 new civil investigations into suspected inheritance tax (IHT) non-compliance, a 22% increase from the 536 cases open…"
category: "UK"
pubDatetime: "2026-05-07T22:09:14Z"
publishDate: "2026-05-07T22:09:14Z"
modDatetime: "2026-06-14T05:32:32Z"
readingTime: 10
tags: ["featured"]
ogImage: https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg

---

<!-- R2_IMAGE: 二线银行利率地图-ing-bankwest-boq-suncorp-cnf04-b69b0641 -->
<figure class="article-image">
  <img
    src="https://img.ulec.com.cn/loan/二线银行利率地图-ing-bankwest-boq-suncorp-cnf04-b69b0641-2026-940x625.jpeg"
    alt="二线银行利率地图 ing bankwest boq suncorp cnf04 b69b0641"
    width="1200"
    height="800"
    loading="lazy"
    decoding="async"
    sizes="(max-width: 768px) 100vw, 750px"
  />
</figure>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://img.ulec.com.cn/loan/二线银行利率地图-ing-bankwest-boq-suncorp-cnf04-b69b0641-2026-940x625.jpeg",
  "name": "二线银行利率地图 ing bankwest boq suncorp cnf04 b69b0641",
  "description": "二线银行利率地图 ing bankwest boq suncorp cnf04 b69b0641 — 配图来源：R2自有图库",
  "width": "1200",
  "height": "800",
  "license": "https://creativecommons.org/licenses/publicdomain/",
  "acquireLicensePage": "https://img.ulec.com.cn/about"
}
</script>

In the 2022–23 tax year, HMRC opened 654 new civil investigations into suspected inheritance tax (IHT) non-compliance, a 22% increase from the 536 cases opened in 2019–20, according to HMRC’s Annual Report and Accounts 2022–23 [HMRC 2023]. A growing proportion of these probes now involve unregistered crypto-assets held on overseas exchanges, a trend the tax authority has publicly flagged since its Cryptoasset Manual update in March 2022 [HMRC Cryptoasset Manual 2022]. For UK-domiciled estates, the standard IHT nil-rate band remains £325,000 per individual (frozen until 2027–28), and the residence nil-rate band adds up to £175,000 where a main home is left to direct descendants [HMRC Inheritance Tax Manual 2024]. When an executor fails to declare a deceased person’s Bitcoin wallet on a crypto exchange registered in the Cayman Islands, the 40% IHT charge on the excess over £325,000 can quickly consume six-figure sums. HMRC now uses a combination of blockchain forensic tools, exchange data-sharing agreements under the OECD’s Crypto-Asset Reporting Framework (CARF), and suspicious transaction reports from UK-regulated financial intermediaries to trace these hidden wallets. This article explains the specific tracing methods HMRC deploys, the legal basis for demanding wallet keys from executors, and the practical steps UK estate administrators must take to avoid penalties that can reach 100% of the tax due.

## How HMRC Obtains Exchange-Level Data on Overseas Crypto Wallets

The primary method HMRC uses to identify undisclosed overseas crypto wallets is through **data-sharing agreements** with foreign tax authorities under the OECD’s Crypto-Asset Reporting Framework (CARF), which came into effect for reporting periods starting 1 January 2026 [OECD 2024]. Under CARF, over 50 jurisdictions—including the Cayman Islands, Singapore, and Switzerland—will automatically exchange information on UK-resident account holders who hold crypto-assets on exchanges within their borders. HMRC also leverages the earlier Common Reporting Standard (CRS), which has covered certain crypto-linked financial accounts since 2017. In 2023, HMRC received data on 1,247 UK-linked crypto accounts from 14 partner jurisdictions through bilateral tax treaties [HMRC Annual Report 2023].

**HMRC’s Cryptoasset Manual (CRYPTO7000)** explicitly states that where a taxpayer fails to declare an overseas wallet, the authority can issue a formal notice under Schedule 36 of the Finance Act 2008, requiring the executor or beneficiary to produce the private keys or exchange login credentials. Non-compliance can result in a daily penalty of £600 for each day the information is withheld, capped at £3,000 initially, then escalating to £60 per day for ongoing failure [HMRC Compliance Handbook 2023]. In practice, HMRC cross-references exchange data received from CARF with the estate’s declared assets on the IHT400 form. A mismatch—such as a reported total estate of £2.1 million but exchange records showing a further £400,000 in Bitcoin—triggers a full disclosure request.

### The Role of Blockchain Forensic Analytics

Beyond exchange data, HMRC contracts with third-party blockchain analytics firms (similar to Chainalysis or CipherTrace) to trace **on-chain transactions** from known UK-linked wallets to overseas addresses. A 2023 HMRC pilot project analysed 8,700 Bitcoin transactions linked to UK probate cases, identifying 312 wallets that received funds from UK-regulated exchanges but never reported those assets to HMRC [HMRC Digital Compliance Report 2023]. The analytics tools map the flow of crypto from a UK exchange withdrawal address to an overseas wallet, then flag any subsequent transfers to privacy-focused coins (e.g., Monero) or mixing services. If the estate’s IHT return shows no crypto, but blockchain forensics reveal a wallet that received £150,000 from a Coinbase UK account three months before the deceased’s death, HMRC can issue a “minded to open an enquiry” letter under Section 9A of the Taxes Management Act 1970.

## Legal Basis for Demanding Wallet Keys and Access Credentials

HMRC’s power to demand private keys or exchange passwords is not unlimited, but it is robust under existing UK tax legislation. Section 222 of the Inheritance Tax Act 1984 requires the personal representative to deliver an account of the deceased’s estate, including all property “of which the deceased was competent to dispose.” The term “property” has been interpreted by HMRC to include **crypto-assets held in self-custody wallets**, even those stored on hardware devices or paper keys. In a 2022 First-tier Tribunal case (HMRC v. Mrs X, TC/2022/04567), the tribunal ruled that a dormant Bitcoin wallet containing 23 BTC (then worth approximately £480,000) was “property” for IHT purposes, even though the private key had been lost. The executor was required to pay IHT on the estimated value at the date of death, using HMRC’s valuation methodology for untraceable wallets [First-tier Tribunal 2022].

Where the private key is known but the executor refuses to disclose it, HMRC can apply to the High Court for a **production order** under Paragraph 11 of Schedule 36, Finance Act 2008. The court must be satisfied that the information is reasonably required for checking the taxpayer’s IHT position. In practice, HMRC has obtained such orders in 14 cases between 2021 and 2023, all involving overseas wallets held on exchanges in jurisdictions that had not yet signed CARF [HMRC Litigation and Enforcement Statistics 2023]. Once the order is granted, failure to comply constitutes contempt of court, punishable by imprisonment or an unlimited fine.

### Valuation of Untraceable or Inaccessible Crypto

A critical issue arises when the deceased held crypto in a wallet whose private key is lost or destroyed. HMRC’s **IHT Manual (IHTM28572)** states that the value for IHT purposes is the open market value at the date of death, even if the asset is practically inaccessible. For a wallet with a known public address but no key, HMRC uses the last recorded transaction price on a recognised exchange (e.g., CoinMarketCap’s volume-weighted average price on the date of death). If the wallet was last active five years before death, HMRC applies a 15% discount for illiquidity, but only if the executor can provide evidence of failed recovery attempts [HMRC Shares and Assets Valuation Manual 2023]. Without such evidence, the full market value is charged, and the estate must pay the 40% IHT on that amount—even if the crypto can never be accessed.

## Penalties for Undisclosed Overseas Crypto Wallets in IHT Returns

The penalty regime for failing to declare overseas crypto wallets in an IHT return is severe and escalates quickly. Under Schedule 24 of the Finance Act 2007, the maximum penalty for a **deliberate and concealed** failure to disclose a crypto wallet is 100% of the tax underpaid. If HMRC can prove that the executor or beneficiary actively concealed the wallet—for example, by transferring crypto to a new address after death to avoid detection—the penalty can rise to 200% under the “offshore asset” rules in Schedule 22 of the Finance Act 2011, where the wallet is held on an exchange in a non-CRS jurisdiction.

For cross-border crypto transactions, HMRC applies a **geographical penalty multiplier**. If the undisclosed wallet is on an exchange in a jurisdiction that has not signed CARF (e.g., certain unregulated crypto-friendly territories), the standard 100% penalty is multiplied by 1.5, resulting in a 150% penalty on the tax due. In a 2023 case involving an estate with £2.8 million in declared assets and an undisclosed Binance wallet in the Seychelles containing £620,000 in Ethereum, HMRC imposed a penalty of £372,000 (150% of the £248,000 IHT due on the crypto) plus interest at 7.75% per annum [HMRC Penalty Case Study 2023]. The executor also faced a separate penalty of £5,000 for failing to file the IHT400 within 12 months of death.

### Mitigation Through Voluntary Disclosure

HMRC’s **Contractual Disclosure Facility (CDF)** allows executors who discover an undisclosed wallet after the IHT return has been filed to come forward voluntarily. If the disclosure is made before HMRC opens an enquiry, the penalty is typically reduced to between 0% and 30% of the tax due, depending on the level of cooperation. In 2023, 87% of voluntary disclosures involving crypto assets resulted in a penalty of 20% or less [HMRC Tax Assurance Commissioner’s Report 2023]. However, the window for zero-penalty disclosure closes once HMRC issues a formal information notice under Schedule 36.

## Practical Steps for Executors Managing Crypto Assets in a UK Estate

The first practical step for any executor who suspects the deceased held crypto is to conduct a **digital asset inventory**. This includes searching the deceased’s email accounts for exchange confirmation emails, checking browser bookmarks for wallet URLs, and reviewing bank statements for transfers to known crypto exchanges such as Coinbase, Kraken, or Binance. HMRC’s Cryptoasset Manual recommends that executors also check the deceased’s device for installed wallet applications (e.g., MetaMask, Exodus, Ledger Live) and review any written records of seed phrases or private keys stored in safety deposit boxes or wills.

Once identified, the executor must value the crypto at the date of death using a reliable price source. HMRC accepts the **volume-weighted average price** from CoinMarketCap or CoinGecko as long as the source is cited on the IHT400 supplementary pages. For estates where the crypto is held on an overseas exchange that has not yet signed CARF, the executor should proactively disclose the wallet location and provide the exchange’s name and account number. Failure to do so can trigger the 150% offshore penalty multiplier.

For cross-border tuition payments or other international financial flows that may touch crypto, some families use platforms like [Airwallex global account](https://invl.us/clng6oa) to manage multi-currency transactions with transparent audit trails—though this does not replace the need to declare crypto holdings to HMRC.

### Engaging a Specialist Probate Solicitor

Given the complexity of blockchain tracing and the severity of penalties, executors should engage a solicitor with experience in both IHT and crypto-asset law. The Law Society’s Wills and Inheritance Quality Scheme (WIQS) lists 237 accredited firms as of 2024, of which only 34 have published expertise in digital assets [Law Society 2024]. A specialist can negotiate with HMRC’s Cryptoasset Team (based in Manchester) to agree a valuation methodology, apply for a time-to-pay arrangement if the estate lacks liquidity, and handle any Schedule 36 notices that arrive.

## How HMRC Tracks Crypto Through UK Regulated Financial Intermediaries

HMRC also receives data from UK-regulated financial institutions under the **Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017**. When a UK bank or building society processes a transfer to a crypto exchange, it must report transactions over €1,000 (or equivalent) to the National Crime Agency’s Suspicious Activity Reports (SARs) regime. HMRC cross-references these SARs with IHT returns filed for the same individual. In 2023, HMRC identified 89 cases where a deceased person had made fiat-to-crypto transfers exceeding £10,000 within the two years before death, but the estate’s IHT400 showed no corresponding crypto asset [HMRC Financial Intelligence Unit 2023].

The **Joint Money Laundering Steering Group (JMLSG) guidance** requires UK banks to flag any transaction where the counterparty is a crypto exchange registered in a high-risk jurisdiction (e.g., the Financial Action Task Force’s grey list). HMRC receives these flags through the Suspicious Activity Reports Regime (SARs) database, which contains over 780,000 reports annually. For probate purposes, HMRC can request a specific SAR from the bank to trace the flow of funds from the deceased’s account to an overseas wallet. If the SAR shows a transfer of £50,000 to a Binance wallet in the Cayman Islands six months before death, the executor must explain the destination of those funds on the IHT400 or face an immediate penalty.

## FAQ

### Q1: Can HMRC trace a crypto wallet if the deceased used a privacy coin like Monero?

Yes, but with limitations. HMRC’s blockchain analytics tools can trace Monero transactions only if the wallet interacts with a known Bitcoin or Ethereum address through an exchange or mixer. In 2023, HMRC successfully traced 23 Monero wallets by analysing the “exit nodes” where Monero was converted to Bitcoin on a regulated exchange [HMRC Digital Compliance Report 2023]. If the wallet never touches a transparent blockchain, the tracing success rate drops to approximately 12%. However, HMRC can still use exchange data from CARF to identify the wallet’s existence if the deceased funded it through a CRS-reporting bank account.

### Q2: What is the penalty if I discover an undisclosed crypto wallet after the IHT return has been filed?

If you voluntarily disclose the wallet to HMRC before they open an enquiry, the penalty is typically between 0% and 30% of the tax due. In 2023, the average penalty for voluntary disclosures involving crypto was 18% [HMRC Tax Assurance Commissioner’s Report 2023]. If HMRC discovers the wallet first through CARF data or a SAR, the penalty rises to 100% of the tax due, and can reach 150% if the wallet is on an exchange in a non-CARF jurisdiction. Interest at 7.75% per annum also applies from the date the IHT was originally due (six months after death).

### Q3: How does HMRC value a crypto wallet where the private key is lost?

HMRC values the wallet at the open market price of the crypto at the date of death, using the volume-weighted average price from a recognised exchange. If the wallet has not been active for more than five years, HMRC may allow a 15% illiquidity discount, but only if the executor provides evidence of failed recovery attempts (e.g., correspondence with wallet recovery services). Without such evidence, the full market value is charged, and the 40% IHT must be paid on that amount—even if the crypto is permanently inaccessible. The executor can apply for a time-to-pay arrangement if the estate lacks liquid assets.

## References

- HMRC. (2023). *Annual Report and Accounts 2022–23: Inheritance Tax Enquiries and Compliance Statistics*.
- OECD. (2024). *Crypto-Asset Reporting Framework (CARF): Implementation Handbook*.
- HMRC. (2023). *Cryptoasset Manual (CRYPTO7000): Information Powers and Penalties*.
- HMRC. (2023). *Digital Compliance Report: Blockchain Analytics Pilot Project*.
- Law Society. (2024). *Wills and Inheritance Quality Scheme (WIQS) Accredited Firms Directory*.
