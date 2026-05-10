import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("drone", "faq", "en");

export default function Page() {
  return <NetworkPage niche="drone" type="faq" locale="en" />;
}
