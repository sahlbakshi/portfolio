import Container from "@/components/Container"
import Image from "next/image"
import review_1 from "@/images/review-1.png"
import review_2_1 from "@/images/review-2.1.png"
import review_2_2 from "@/images/review-2.2.png"

export default function Reddit() {
  return (
    <Container>
      <div className="text-lg text-gray-1">
        Some users after using our app ...
      </div>
      <Image src={review_1} width={400} height={200}></Image>
      <Image src={review_2_1} width={400} height={200}></Image>
      <Image src={review_2_2} width={400} height={200}></Image>
    </Container>
  )
}
