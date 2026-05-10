import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("drone", "servicios", "en");

export default function Page() {
  return <NetworkPage niche="drone" type="servicios" locale="en" />;
}
