import ParaLink from "@/components/paralink";

export default function Notes() {
  return (
    <div>
      <ul className="flex flex-col gap-1">
        <li className="flex flex-row gap-2 justify-between">
          <ParaLink link="That Line in Moneyball" href="/essays/that-line-in-moneyball"/>
          <p className="text-[#8A8A8A]">Dec 29, 2025</p>
        </li>
        <li className="flex flex-row gap-2 justify-between">
          <ParaLink link="Giving Advice is Flawed" href="/essays/giving-advice-is-flawed"/>
          <p className="text-[#8A8A8A]">Jan 04, 2026</p>
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
      </ul>
    </div>
  )
}
