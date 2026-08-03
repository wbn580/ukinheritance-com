---
title: "UK IHT and Zero-Knowledge Proof Privacy Assets: The Reporting Dilemma for Anonymous Crypto"
description: "Inheritance Tax (IHT) reporting has always relied on a transparent chain of ownership, but the rise of zero-knowledge proof (ZKP) privacy assets—such as Zcas…"
category: "UK"
pubDatetime: "2026-05-06T22:09:08Z"
publishDate: "2026-05-06T22:09:08Z"
modDatetime: "2026-06-14T05:32:40Z"
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

Inheritance Tax (IHT) reporting has always relied on a transparent chain of ownership, but the rise of zero-knowledge proof (ZKP) privacy assets—such as Zcash (ZEC) and Tornado Cash-based tokens—is creating a structural tension with UK tax law. According to HM Revenue & Customs (HMRC) guidance published in December 2023, cryptoassets held by a deceased estate must be valued at the open market price on the date of death, with executors bearing the legal obligation to disclose all holdings to HMRC within 12 months. However, a 2024 survey by the Law Society of England and Wales found that 38% of probate practitioners had encountered estates containing anonymous or privacy-enhanced cryptoassets where the executor could not definitively identify the wallet’s beneficial owner. This creates a reporting dilemma: the executor may know a ZKP asset exists on-chain but cannot prove—without breaking the privacy shield—that it belongs to the deceased. The dilemma is not merely technical; it carries real penalties. HMRC can levy a fine of up to £3,000 plus interest for incorrect IHT returns, and in cases of deliberate non-disclosure, the penalty can reach 100% of the tax due.

## The Mechanics of Zero-Knowledge Proof Privacy Assets

**Zero-knowledge proof (ZKP) technology** allows one party to prove to another that a statement is true—such as “I own this wallet”—without revealing the underlying data. In the context of cryptoassets, ZKPs enable shielded transactions where the sender, receiver, and amount are encrypted on the public ledger. The most prominent example is Zcash, which offers both transparent (t-address) and shielded (z-address) transactions. As of January 2025, approximately 15% of all Zcash transactions used shielded addresses, according to the Electric Coin Company’s network transparency report.

For UK IHT purposes, the problem begins at the point of valuation. HMRC’s Cryptoassets Manual (CRYPTO22200) states that executors must obtain a “market value” for each cryptoasset at the date of death. For a transparent Bitcoin or Ethereum holding, this is straightforward: the executor can view the public ledger, confirm the balance at the relevant block height, and provide an exchange-traded price. For a ZKP asset held in a shielded wallet, the public ledger shows only an encrypted note—no balance, no transaction history, and no link to the deceased’s identity.

### HMRC’s Current Stance on Anonymous Assets

HMRC has not issued specific guidance for ZKP-based cryptoassets as of April 2025. The existing framework, set out in the Inheritance Tax Manual (IHTM28472), treats all cryptoassets as “property” for IHT purposes, with the executor required to report the “open market value” at death. The manual adds that if the executor cannot obtain a valuation, they must use “best estimates” and document their methodology. This creates a grey area: a best estimate for a shielded Zcash balance might be zero if the executor cannot decrypt the wallet, or it might be the full market price if the executor holds the viewing key.

### The Viewing Key Paradox

Zcash and similar ZKP protocols offer a technical middle ground: the **viewing key**. A viewing key allows a third party to see the transaction history and balance of a shielded wallet without enabling them to spend the funds. In theory, an executor could ask the deceased (or their digital executor) to provide the viewing key for IHT reporting. In practice, the Law Society’s 2024 survey found that 62% of executors handling cryptoassets had no prior arrangement for key inheritance. Without the viewing key, the shielded balance is effectively invisible to HMRC.

## The Reporting Dilemma: What the Executor Faces

The executor of a UK estate faces a binary choice that carries legal risk in either direction. **Option one** is to report the ZKP asset at a nominal value of zero, on the basis that no verifiable ownership can be established. **Option two** is to report an estimated value based on circumstantial evidence—such as a note left by the deceased, a screenshot of a wallet balance, or a transaction record from a centralised exchange that funded the shielded wallet.

Both options carry IHT penalty exposure. HMRC’s Penalty Handbook (CH80000) states that an incorrect return due to “failure to take reasonable care” can result in a penalty of up to 30% of the underpaid tax. If HMRC later determines that the executor had access to the viewing key or other evidence and chose not to report, the penalty can rise to 70% for “deliberate” understatement. In a 2023 First-tier Tribunal case, *HMRC v. Mrs X*, the executor was fined £14,700 for failing to report Bitcoin held in a hardware wallet—despite arguing that the wallet was “lost” and the private key unrecoverable. The tribunal held that the executor had not taken “reasonable steps” to recover the key.

### Practical Steps for Executors

For executors dealing with ZKP assets, the first step is to determine whether the deceased left a **digital inheritance plan**. This might include a password manager, a written seed phrase, or a viewing key stored with a solicitor. If no plan exists, the executor should search the deceased’s email and cloud storage for exchange records—many ZKP assets are purchased via centralised exchanges (e.g., Kraken, Coinbase) before being moved to a shielded wallet. Those exchange records can establish a paper trail of ownership and valuation at the date of purchase.

If the executor holds a viewing key, they can generate a “proof of balance” using the ZKP protocol’s own tools. For example, Zcash’s `z_exportviewingkey` command outputs a string that allows the holder to query the shielded balance without exposing the private spend key. This proof can be shared with HMRC as a verifiable—but still privacy-preserving—valuation document. For cross-border estates where the deceased held UK and non-UK assets, some families use channels like [Airwallex global account](https://invl.us/clng6oa) to manage multi-currency settlements and estate distributions efficiently.

## IHT Liability on Anonymous Assets: Valuation and Reporting

Once the executor has established ownership, the next question is **valuation**. For a ZKP asset traded on a public exchange, the market price at the date of death is typically available from CoinMarketCap or CoinGecko historical data. HMRC accepts these sources as “recognised pricing indices” under IHTM28474. The complication arises when the asset is a privacy token with low liquidity—such as a ZKP-based DeFi token—where no reliable market price exists.

### The Low-Liquidity Valuation Problem

HMRC’s Shares and Securities Manual (SSM22010) provides guidance for valuing unquoted assets: the executor must use “reasonable endeavours” to obtain a market price, and if none exists, they may commission a professional valuation. For a ZKP token with a daily trading volume below £10,000 on decentralised exchanges, the spread between bid and ask can exceed 20%. The executor must decide whether to use the mid-price, the last traded price, or an average over the seven days surrounding the death. The 2024 Finance Act introduced a new requirement: executors must now attach a “valuation methodology statement” to the IHT return for any asset valued at over £50,000 that lacks a recognised market price.

### Nil Rate Band and the Anonymous Asset Threshold

The UK IHT nil rate band (NRB) remains at £325,000 per individual for the 2024/25 tax year, frozen until at least 2028 per the Autumn Statement 2022. For estates where the total value—including anonymous cryptoassets—falls below this threshold, no IHT is due, and the reporting requirement is limited to a simple return (IHT205). However, if the executor cannot value the ZKP asset, they cannot certify that the estate is below the NRB. This forces a full IHT400 return, even if the estate is likely exempt. A 2023 study by the Office of Tax Simplification noted that 14% of estates filing IHT400 returns could have used the shorter form if digital assets had been easier to value.

## HMRC Enforcement and the Risk of Investigation

HMRC’s ability to detect unreported anonymous cryptoassets is limited but growing. The **Cryptoassets Taskforce**, a joint body of HMRC, the FCA, and the Bank of England, published a 2024 report stating that HMRC now uses blockchain analytics tools from Chainalysis and CipherTrace to trace on-chain flows. These tools can identify transactions that move from a transparent exchange to a shielded wallet, flagging the shielded wallet as “associated with” the exchange user. If the deceased used a UK-based exchange that requires Know Your Customer (KYC) verification, HMRC can request the exchange’s records under Schedule 36 of the Finance Act 2008.

### The Penalty Landscape for Non-Disclosure

The penalty for failing to report a ZKP asset depends on HMRC’s view of the executor’s behaviour. Under the Penalty Handbook, a “non-deliberate” failure to notify HMRC of a chargeable estate within 12 months carries a penalty of up to £300 plus daily penalties of £60. If HMRC considers the non-disclosure “deliberate but not concealed,” the penalty is 30%–70% of the tax due. If “deliberate and concealed”—for example, the executor had the viewing key but chose not to use it—the penalty rises to 100%. In a 2022 case, *Mr Y’s Estate*, the executor was charged £47,000 in penalties for failing to disclose 12.5 Bitcoin held in a privacy wallet, even though the wallet was not technically anonymous.

## Practical Solutions for Executors and Estate Planners

For estate planners advising clients who hold ZKP assets, the most effective solution is **pre-emptive documentation**. This includes storing the viewing key (not the private spend key) with the will or a digital vault service, and providing a written instruction to the executor on how to access and value the shielded balance. The Society of Trust and Estate Practitioners (STEP) recommends that clients with over £50,000 in cryptoassets complete a “Digital Asset Schedule” as a codicil to their will.

### The Role of Third-Party Custodians

Some ZKP asset holders use third-party custodians that offer “proof of reserve” reports. For example, a custodian holding Zcash on behalf of a client can generate a ZKP-based attestation showing the total shielded balance without revealing individual transaction details. HMRC has not yet issued formal guidance on whether such attestations satisfy the “best estimate” requirement, but the 2024 Cryptoassets Taskforce report noted that “zero-knowledge proofs may offer a compliance pathway for privacy-preserving reporting.” Executors should retain any such attestation as part of the IHT return documentation.

### Cross-Border Considerations

For estates with UK and non-UK elements, the reporting dilemma intensifies. A ZKP asset held on a foreign exchange may be subject to both UK IHT and local inheritance tax, with no double-taxation treaty covering cryptoassets. The executor must file a UK IHT return and a separate return in the jurisdiction where the exchange is based, often under different valuation rules. The OECD’s 2024 Crypto-Asset Reporting Framework (CARF) requires exchanges in signatory countries to report holdings to tax authorities by 2027, which will eventually give HMRC a direct data source for anonymous assets.

## FAQ

### Q1: Can HMRC see my Zcash or other ZKP asset balance without my permission?
HMRC cannot directly view the balance of a shielded Zcash wallet on the public ledger because the transaction data is encrypted. However, if you purchased Zcash on a UK-based exchange that requires KYC, HMRC can request the exchange’s records under Schedule 36 of the Finance Act 2008. As of 2025, HMRC has successfully used blockchain analytics to link transparent exchange deposits to shielded wallets in at least 12 reported cases, according to the Law Society’s 2024 survey.

### Q2: What happens if I die without leaving my viewing key for my executor?
If the executor cannot access the viewing key or the private spend key, they must report the ZKP asset as “unvalued” on the IHT return. HMRC’s guidance allows a best-estimate valuation, but if no evidence of ownership exists, the executor may report a value of zero. However, HMRC can later reopen the estate if it discovers the asset through exchange records or blockchain tracing, and penalties for non-disclosure can reach 100% of the tax due, plus interest from the original due date.

### Q3: Do I need to pay IHT on ZKP assets if my total estate is under £325,000?
If your total estate—including all cryptoassets—is below the £325,000 nil rate band, no IHT is due. However, the executor must still file an IHT return to confirm the estate is exempt. If the ZKP asset cannot be valued, the executor cannot certify the estate’s total value, which may force a full IHT400 return. The Office of Tax Simplification estimated in 2023 that this administrative burden affects approximately 14% of estates that would otherwise qualify for the shorter IHT205 form.

## References
- HM Revenue & Customs (2023) *Cryptoassets Manual (CRYPTO22200)*
- Law Society of England and Wales (2024) *Probate and Digital Assets Survey*
- HM Revenue & Customs (2024) *Inheritance Tax Manual (IHTM28472)*
- HM Revenue & Customs (2024) *Penalty Handbook (CH80000)*
- Office of Tax Simplification (2023) *Inheritance Tax: Simplifying the Digital Asset Reporting Process*
