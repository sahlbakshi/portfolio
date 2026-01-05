import ParaLink from "@/components/paralink";

export default function Notes() {
  return (
    <div>
      <ul className="flex flex-col gap-1">
        <li className="flex flex-row gap-2 justify-between">
          <ParaLink link="That One Line From Moneyball" href="/essays/that-one-line-from-moneyball"/>
          <p className="text-[#8A8A8A]">Dec 31, 2025</p>
        </li>
        <li className="flex flex-row gap-2 justify-between">
          <ParaLink link="Leetcode For Dummies" href=""/>
          <p className="text-[#8A8A8A]">Soon</p>
        </li>
        <li className="flex flex-row gap-2 justify-between">
          <ParaLink link="People Who Inspire Me" href=""/>
          <p className="text-[#8A8A8A]">Soon</p>
        </li>
        <li className="flex flex-row gap-2 justify-between">
          <ParaLink link="Telehealth Companies" href=""/>
          <p className="text-[#8A8A8A]">Soon</p>
        </li>
        <li className="flex flex-row gap-2 justify-between">
          <ParaLink link="Don’t Give Advice" href=""/>
          <p className="text-[#8A8A8A]">Soon</p>
        </li>
      </ul>
    </div>
  )
}
