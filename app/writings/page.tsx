import ParaLink from "@/components/paralink";

export default function Notes() {
  return (
    <div>
      <ul className="flex flex-col gap-1">
        <li className="flex flex-row gap-2 justify-between">
          <ParaLink link="That One Line From Moneyball" href="https://docs.google.com/document/d/1m3z4T0-7Za3d14V4GXy5P_k_dl8T68csrpmvxMmhyDI/preview"/>
          <p>Jan 4, 2026</p>
        </li>
        <li className="flex flex-row gap-2 justify-between">
          <ParaLink link="Leetcode For Dummies" href=""/>
          <p>Jan 5, 2026</p>
        </li>
        <li className="flex flex-row gap-2 justify-between">
          <ParaLink link="People Who Inspire Me" href=""/>
          <p>Jan 5, 2026</p>
        </li>
        <li className="flex flex-row gap-2 justify-between">
          <ParaLink link="Telehealth Companies" href=""/>
          <p>Jan 6, 2026</p>
        </li>
      </ul>
    </div>
  )
}
