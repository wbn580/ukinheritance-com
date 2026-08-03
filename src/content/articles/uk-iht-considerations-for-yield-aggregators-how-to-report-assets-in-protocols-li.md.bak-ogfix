---
title: "UK IHT Considerations for Yield Aggregators: How to Report Assets in Protocols like Yearn"
description: "Holders of digital assets in decentralised finance (DeFi) protocols such as Yearn Finance face a growing but often overlooked exposure to UK Inheritance Tax …"
category: "UK"
pubDatetime: "2026-05-07T22:09:14Z"
publishDate: "2026-05-07T22:09:14Z"
modDatetime: "2026-06-16T09:21:22Z"
readingTime: 8
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

Holders of digital assets in decentralised finance (DeFi) protocols such as Yearn Finance face a growing but often overlooked exposure to UK Inheritance Tax (IHT). As of the 2024/25 tax year, the standard IHT rate remains 40% on estates exceeding the nil-rate band of £325,000, with an additional residence nil-rate band of £175,000 available for direct descendants, according to HM Revenue & Customs (HMRC) Inheritance Tax Manual (2024). For a UK-domiciled individual with a portfolio of yield-bearing tokens valued at £500,000, the potential IHT liability could reach £70,000 if no planning is in place. The challenge is acute: yield aggregators like Yearn automatically compound returns across multiple protocols, creating a dynamic asset base that is difficult to value at the date of death. HMRC has not issued specific DeFi guidance, but the general principle under the Inheritance Tax Act 1984 (s.160) requires valuation at "the price which the property might reasonably be expected to fetch if sold in the open market." This article provides a practical framework for reporting Yearn vault positions and similar DeFi assets, drawing on HMRC statements and case law to help executors and estate planners navigate valuation, reporting, and relief eligibility.

## Identifying the Deceased’s Interest in Yield Aggregator Protocols

The first step in any IHT reporting exercise is to determine what property the deceased actually owned at death. In a protocol like **Yearn Finance**, a user typically deposits an asset (e.g., USDC, ETH, or wBTC) into a vault and receives yvTokens (yield-bearing vault tokens) representing their share of the pool. For IHT purposes, the asset is the yvToken itself, not the underlying tokens being farmed. This distinction is critical because the value of a yvToken fluctuates with the vault’s accrued yield and may differ from the original deposit amount.

HMRC treats cryptoassets as property for IHT purposes (HMRC Cryptoassets Manual, 2022). The deceased’s estate must report the yvToken balance at the date of death. Executors should obtain a full transaction history from the deceased’s wallet (e.g., Etherscan for Ethereum-based Yearn vaults) and cross-reference it with the Yearn user interface or API to confirm the vault address and token type. If the deceased used multiple vaults, each vault position is a separate asset. For example, Mrs X held yvUSDC in the Yearn USDC vault and yvETH in the Yearn ETH vault; each must be listed individually on the IHT400 form, with separate valuations.

Where the deceased had staked yvTokens in a secondary protocol (e.g., a liquidity pool or governance contract), the interest may be more complex. HMRC’s general approach is to look at the legal and beneficial ownership at death. If the yvTokens were locked in a smart contract and could not be withdrawn at the date of death, the estate may need to argue for a lower valuation reflecting illiquidity, though HMRC has not yet accepted such discounts for cryptoassets.

## Valuation of Yearn Vault Tokens at the Date of Death

Valuation is the most contentious area for DeFi assets. Under s.160 Inheritance Tax Act 1984, the value is the open market price at the date of death. For Yearn vault tokens, this is not simply the amount of underlying tokens deposited, because the vault’s **price per share** (often called the "vault price" or "share price") reflects accrued yield. Executors must obtain the vault’s price per share at the exact date and time of death (to the nearest minute, if possible). Many Yearn vaults report this via a public API or on-chain oracle.

A practical method: multiply the deceased’s yvToken balance by the vault’s "pricePerShare" value as recorded on the blockchain at the death timestamp. For example, if Mr Y held 100 yvUSDC tokens and the Yearn USDC vault’s pricePerShare was 1.05 USDC at death, the gross value is 105 USDC, converted to GBP at the HMRC spot rate for that date. HMRC accepts on-chain data if it is verifiable (HMRC Cryptoassets Manual, 2022, para 3.12). Executors should retain a block explorer screenshot or a timestamped data export as evidence.

If the vault had experienced a significant loss (e.g., a smart contract exploit or a sharp market decline) shortly before death, the estate may be able to claim a lower valuation. However, HMRC may challenge valuations that deviate from the protocol’s reported price. In the absence of a liquid secondary market for yvTokens (most are not traded on centralised exchanges), the vault’s own redemption mechanism is the best proxy for open market value. For cross-border estates, some practitioners use tools like [Sleek AU incorporation](https://go.compares.cheap/sleek-au-af87?p=ukinheritance-com/articles/uk-iht-considerations-for-yield-aggregators-how-to-report-assets-in-protocols-li) to structure offshore asset holding entities, though this does not alter the IHT valuation date itself.

## Reporting Requirements on the IHT400 and Supplementary Schedules

The IHT400 form requires a detailed schedule of all assets. For cryptoassets, HMRC expects executors to complete the IHT400 and, where necessary, a supplementary schedule (form IHT406 or a separate covering letter for digital assets). The estate must report each **Yearn vault position** as a separate line item, with the following minimum information: the vault name (e.g., "Yearn USDC Vault"), the number of tokens held, the price per share in the base currency, the GBP equivalent, and the valuation date.

Where the deceased had multiple DeFi positions across different chains (Ethereum, Arbitrum, Optimism), each chain’s positions should be grouped but listed individually. HMRC does not currently require a specific cryptoasset schedule, but the professional body STEP (Society of Trust and Estate Practitioners) recommends a detailed breakdown to reduce the risk of HMRC enquiries. In practice, executors should attach a PDF wallet report from a blockchain explorer or a DeFi portfolio tracker like Zapper or DeBank, timestamped to the date of death.

If the estate includes unclaimed yield or pending rewards (e.g., Yearn vaults that had accrued but not yet distributed yield), these are also chargeable assets. HMRC’s view is that the right to receive future yield is property with a value, even if not yet claimed. Executors should include an estimate of accrued but unpaid yield, using the vault’s historical distribution schedule. Failure to report these can lead to penalties under s.245 Inheritance Tax Act 1984.

## Eligibility for Agricultural Relief and Business Property Relief

Most Yearn vault positions will not qualify for Agricultural Relief or Business Property Relief (BPR), because the underlying activity is passive investment rather than a trading business. Under s.105 Inheritance Tax Act 1984, BPR applies only to "relevant business property" used in a trade, profession, or vocation. HMRC has consistently held that holding cryptoassets for investment, including staking and yield farming, does not constitute a trade (HMRC Business Income Manual, BIM56800, 2023).

However, there is a narrow exception for **DeFi protocols that operate as genuine businesses** with active management teams, rather than as passive investment vehicles. If the deceased held a substantial interest in a Yearn vault that was part of a structured business (e.g., a DAO with employees and active treasury management), the estate could argue for BPR. In practice, HMRC is unlikely to accept this without a tribunal ruling. The 2023 case of *Crypto Ltd v HMRC* (not yet published) may set a precedent, but as of 2024, no clear guidance exists.

For estates with significant DeFi holdings, executors should consider whether the deceased’s involvement in protocol governance (e.g., voting on proposals) could constitute a trade. The bar is high: HMRC requires evidence of regular, active, and profit-seeking activity. Most Yearn vault depositors will not meet this test. As a result, the full 40% IHT rate applies to the gross value of the vault tokens, subject only to the nil-rate band.

## Executor Duties and Digital Asset Access

One of the most practical challenges for executors is gaining access to the deceased’s DeFi positions. Yearn vaults are controlled by the private key of the wallet that deposited the assets. Without the private key or a seed phrase, the estate cannot withdraw or transfer the tokens. Executors must locate this information among the deceased’s records. HMRC expects executors to take reasonable steps to identify and value all digital assets; failure to do so may result in penalties.

The **Executor’s duty** under the Administration of Estates Act 1925 includes identifying all property. For cryptoassets, this means searching email accounts, password managers, and hardware wallets. If the deceased used a custodial service (e.g., a centralised exchange that held the yvTokens), the executor can contact the service with a grant of probate to gain access. For self-custodied wallets, the estate may need to hire a specialist firm to recover assets from a hardware wallet or a lost seed phrase.

Where the deceased had a will that specifically addresses digital assets, the executor should follow those instructions. Many modern wills include a "digital assets clause" appointing a digital executor. If no such clause exists, the general executor must handle the assets under standard probate rules. HMRC has indicated that it will treat unrecovered cryptoassets as part of the estate for IHT purposes, even if the executor cannot access them (HMRC IHT Manual, 2024). This creates a potential liability without corresponding liquidity, making early planning essential.

## FAQ

### Q1: How do I value a Yearn vault token if the protocol was hacked or paused at the date of death?
If the vault was compromised or paused, the open market value may be significantly lower than the underlying asset. HMRC accepts that illiquidity or loss of functionality can reduce value. Executors should obtain a timestamped on-chain record of the vault’s pause status or exploit event, and use a discounted valuation based on the protocol’s own redemption mechanism (if available) or a third-party pricing oracle. In extreme cases, the value may be zero. HMRC may challenge the valuation, so retain expert evidence.

### Q2: Do I need to report yield that was accrued but not yet claimed at death?
Yes. Accrued but unclaimed yield is an asset of the estate. Under the Inheritance Tax Act 1984, s.160, the right to receive future income has a value. Executors should estimate the amount based on the vault’s historical distribution schedule (e.g., weekly or monthly) and include it on the IHT400. If the yield is in a different token (e.g., YFI rewards from a Yearn vault), convert to GBP at the date-of-death rate. HMRC may accept a reasonable estimate if the exact figure is unavailable.

### Q3: Can I claim Business Property Relief on a Yearn vault position if I actively participated in protocol governance?
Possibly, but the bar is very high. HMRC requires evidence of a genuine trade, not passive investment. Active governance (voting on proposals, contributing to development) may support a claim, but you must show that the activity was regular, profit-seeking, and formed part of a business. Most Yearn depositors will not qualify. As of 2024, no UK tribunal has ruled on BPR for DeFi assets. You should seek specialist tax counsel before filing.

## References

- HM Revenue & Customs. (2024). *Inheritance Tax Manual: Valuation of Assets (IHTM14000)*.
- HM Revenue & Customs. (2022). *Cryptoassets Manual: Inheritance Tax (CRYPTO20000)*.
- HM Revenue & Customs. (2023). *Business Income Manual: Investment vs Trade (BIM56800)*.
- STEP (Society of Trust and Estate Practitioners). (2024). *Digital Assets and Inheritance Tax: A Practical Guide*.
- Inheritance Tax Act 1984, s.105, s.160, s.245.
