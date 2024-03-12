import CafeContents from "../../searchTypes/contents/CafeContents";
import MoreResult from "@/components/button/MoreResult";

export default function SearchAllCafe({ data }: { data: SearchCafeType[] }) {
  return (
    <section>
      <h2>카페</h2>
      <ul>
        <CafeContents data={data} />
      </ul>
      <MoreResult type="cafe" />
    </section>
  )
}