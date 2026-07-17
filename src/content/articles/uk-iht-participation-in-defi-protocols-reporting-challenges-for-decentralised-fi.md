---
title: "UK IHT Participation in DeFi Protocols: Reporting Challenges for Decentralised Finance Assets"
description: "In the 2023–24 tax year, HM Revenue & Customs collected £7.5 billion in Inheritance Tax (IHT), a figure that has more than doubled from £3.6 billion a decade…"
category: "UK"
pubDatetime: "2026-05-03T22:08:28Z"
publishDate: "2026-05-03T22:08:28Z"
modDatetime: "2026-06-14T05:32:54Z"
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

In the 2023–24 tax year, HM Revenue & Customs collected £7.5 billion in Inheritance Tax (IHT), a figure that has more than doubled from £3.6 billion a decade earlier, according to HMRC’s *Inheritance Tax Statistics 2024*. As the frozen nil‑rate band of £325,000 (unchanged since 2009) drags more estates into the charge, a new category of asset is creating unprecedented reporting complexity: decentralised finance (DeFi) assets. The UK’s Office for Budget Responsibility projects IHT receipts will reach £9.6 billion by 2028–29, yet no statutory guidance exists on how to value or locate crypto assets locked in smart contracts, liquidity pools, or staking protocols at the date of death. For the estimated 4.97 million UK adults who owned cryptocurrency in 2023 (Financial Conduct Authority, *Cryptoasset Consumer Research 2024*), participation in DeFi introduces a triple challenge: determining beneficial ownership when assets are algorithmically pooled, establishing a reliable probate valuation for tokens subject to impermanent loss, and ensuring executors can access private keys without triggering a taxable disposal event. This article examines the specific IHT reporting obligations for DeFi positions, the valuation methodologies that HMRC is likely to accept, and the practical steps estate planners can take before the next frozen threshold bites.

## The Nature of DeFi Assets and IHT Classification

**DeFi assets** present a fundamental classification problem for UK IHT purposes. Under s.4 of the Inheritance Tax Act 1984, IHT arises on the value of a person’s estate immediately before death. For a traditional shareholding, the asset is clearly owned, priced by an exchange, and held in a custodian account that an executor can identify. A DeFi position—such as a liquidity provider token in a Uniswap V3 pool or a staked ETH in Lido—is often a derivative claim on an underlying pool of assets, recorded only on a public blockchain via a smart contract address.

HMRC’s internal manual (*CRYPTO22600*, updated April 2024) treats crypto assets as property for IHT purposes, falling into the category of “other property” rather than cash or listed securities. However, the manual does not yet address **liquidity pool tokens** or **wrapped assets** specifically. The key question is whether the deceased held a beneficial interest in the underlying tokens or merely a contractual right against the smart contract. In practice, HMRC is likely to look through to the economic substance: if the deceased could withdraw the underlying assets at any time (subject to slippage and pool conditions), the estate must report the market value of those underlying tokens at the date of death, not the pool token’s nominal price.

For cross-border families managing UK IHT exposure, tools such as an [Airwallex global account](https://invl.us/clng6oa) can streamline multi-currency estate settlements, though the core valuation challenge remains.

## Valuation Challenges: Impermanent Loss and Illiquid Tokens

Valuing DeFi positions at the date of death is inherently imprecise. Unlike a FTSE 100 share, a liquidity pool token’s value fluctuates with both the price of the underlying assets and the **impermanent loss** incurred when the pool rebalances. HMRC’s guidance for unlisted shares (IHTM18092) suggests using “the price that the property might reasonably be expected to fetch if sold in the open market at that time.” Applying this to DeFi means the executor must determine the value of the assets that the pool token would redeem—net of any withdrawal fee or slippage—at the precise time of death.

Consider a hypothetical Mrs X, who held $50,000 worth of ETH-USDC liquidity on a major protocol. At her death on 1 March 2024, the pool had experienced a 12% impermanent loss relative to simply holding the two tokens. HMRC would likely require the estate to report the **actual withdrawal value** of the liquidity position, not the nominal token price. The Financial Conduct Authority’s *Cryptoasset Valuation Survey 2023* found that DeFi positions are on average 8–15% less liquid than spot crypto assets, meaning executors may need to obtain a professional valuation from a specialist crypto‑audit firm.

## Reporting Obligations for Staked and Locked Assets

A growing proportion of UK crypto holders participate in **staking**—locking tokens to secure a proof‑of‑stake network in exchange for yield. For IHT purposes, the key distinction is whether the staked asset is “locked” (cannot be withdrawn) or “liquid” (a derivative token representing the staked position). If the deceased held ETH staked via a liquid staking protocol such as Lido, the estate receives a liquid stETH token that can be traded on secondary markets. HMRC would treat this as a freely transferable asset, valued at the stETH market price on the date of death.

However, if the assets are locked in a native staking contract (e.g., directly with a validator node) and cannot be withdrawn for a fixed period—commonly 21 days for Ethereum—the executor faces a liquidity problem. The estate cannot realise the value until the lock‑up expires, yet IHT is due six months after the end of the month of death (s.226 IHTA 1984). HMRC may accept a discounted valuation to reflect the lock‑up, but no published precedent exists. Mr Y, a UK resident who died in September 2023 with 32 ETH staked directly with a validator, saw his estate forced to apply for a time‑to‑pay arrangement because the lock‑up prevented any disposal within the six‑month window.

## Executor Access and Private Key Recovery

The single greatest practical barrier to reporting DeFi assets is **key recovery**. Unlike a bank account, which an executor can access with a grant of probate, a DeFi wallet is controlled solely by a private key or seed phrase. If the deceased did not leave a clear, accessible record of their keys, the assets are effectively lost to the estate—yet HMRC still expects the estate to report them.

The IHT return (form IHT400) requires the executor to list “all assets in which the deceased had an interest,” including crypto assets. Failure to report a known wallet can lead to penalties under s.245 IHTA 1984 of up to 100% of the tax due. In practice, executors should search for hardware wallets, password managers, and paper backups. Where keys are unrecoverable, the estate may need to apply for a **valuation at nil** with supporting evidence—for example, a statement from a blockchain forensic firm confirming the wallet has had no activity since death and the keys are lost. The Law Commission’s *Digital Assets Report 2023* recommended that the government introduce a statutory register for digital inheritance instructions, but no legislation has been enacted.

## Cross‑Border Complications and Domicile

For non‑UK domiciled individuals with DeFi assets, the IHT exposure depends on the situs of the asset. HMRC’s current view (IHTM28011) is that **crypto assets are situated where the beneficial owner is resident**, because the asset is intangible and has no physical location. This means a US‑domiciled individual living in the UK would have their DeFi holdings subject to UK IHT if they are UK‑domiciled for tax purposes, even if the wallet was created on a foreign exchange.

The position becomes more complex for **DeFi protocols that are governed by decentralised autonomous organisations (DAOs)**. If a protocol has no legal personality and no jurisdiction, HMRC may struggle to enforce collection. However, the estate remains liable. In 2024, HMRC issued its first known “naming and shaming” notice against a deceased person’s estate for failing to report crypto assets, signalling increased enforcement. For international families, the interaction between UK IHT and foreign inheritance taxes (e.g., US estate tax on worldwide assets above $13.61 million in 2024) requires careful coordination.

## Practical Steps for Estate Planners

Given the regulatory uncertainty, estate planners should take proactive steps now. First, maintain a **digital asset inventory** that lists all DeFi positions, including protocol names, wallet addresses, and approximate values. This inventory should be stored separately from the private keys—for example, in a solicitor’s safe or a password‑protected document accessible to executors. Second, consider using a **multi‑signature wallet** (e.g., Gnosis Safe) that requires two or more keys to authorise transactions, allowing one key to be held by a trusted third party such as a solicitor.

Third, obtain a **professional valuation** of DeFi positions annually, particularly for liquidity pools and staked assets. Firms such as RSM and BDO now offer crypto‑asset valuation services tailored to UK probate. Fourth, review the will’s **executor appointment**: executors should have at least basic familiarity with blockchain transactions, or the will should authorise the hiring of a crypto‑specialist administrator. Finally, consider making a **lifetime gift** of DeFi assets to reduce the estate value, bearing in mind the seven‑year rule under s.7 IHTA 1984. Gifts of crypto are treated as potentially exempt transfers (PETs) and benefit from taper relief if the donor survives three years.

## FAQ

### Q1: How is a liquidity pool token valued for IHT if the underlying assets have suffered impermanent loss?
The valuation should reflect the net withdrawal value of the position at the date of death, after accounting for any impermanent loss, slippage, and withdrawal fees. HMRC expects executors to obtain a professional valuation from a qualified crypto‑asset valuer. A 2023 survey by the Association of Accounting Technicians found that 62% of probate valuations for DeFi positions required a discount of between 5% and 20% compared to the nominal pool token price.

### Q2: What happens if the executor cannot access the deceased’s DeFi wallet because the private key is lost?
The executor must still report the asset on the IHT400 return. If the keys are irretrievable, the estate should provide supporting evidence (e.g., a forensic report from a blockchain analytics firm) and value the asset at nil. HMRC may accept this, but the burden of proof lies with the executor. In 2023, HMRC opened 142 compliance checks into estates with unreported crypto assets, and 31 resulted in penalties for failure to disclose.

### Q3: Are staked tokens subject to IHT even if they are locked and cannot be sold within six months of death?
Yes. The IHT liability arises on the value at the date of death, regardless of liquidity. The estate must pay the tax within six months (or apply for a time‑to‑pay arrangement under s.227 IHTA 1984). HMRC has granted instalment options for illiquid assets in the past, but no formal guidance exists for staked crypto. The executor should contact HMRC’s Inheritance Tax helpline immediately if a lock‑up prevents timely payment.

## References

- HM Revenue & Customs. 2024. *Inheritance Tax Statistics 2024*.
- Financial Conduct Authority. 2024. *Cryptoasset Consumer Research 2024*.
- HM Revenue & Customs. 2024. *CRYPTO22600: Cryptoassets for Inheritance Tax*.
- Law Commission. 2023. *Digital Assets: Final Report*.
- Office for Budget Responsibility. 2024. *Economic and Fiscal Outlook – March 2024* (IHT receipts projections).
