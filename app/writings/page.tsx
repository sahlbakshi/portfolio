import ParaLink from "@/components/paralink";

export default function Writings() {
  return (
    <div>
      <ul className="flex flex-col gap-1">
        <li className="flex flex-row gap-2">
          <ParaLink link="What Moneyball Taught Me" href="https://docs.google.com/document/d/1m3z4T0-7Za3d14V4GXy5P_k_dl8T68csrpmvxMmhyDI/preview"/>
          <p>Jan 4, 2026</p>
        </li>
        <li className="flex flex-row gap-2">
          <ParaLink link="People Who Inspire Me" href="https://docs.google.com/document/d/11AO15SP_tn80WtyRv4EVT4093cr2qj1BkYZhONwlfFw/preview"/>
          <p>Jan 4, 2026</p>
        </li>
      </ul>
    </div>
  )
}   
