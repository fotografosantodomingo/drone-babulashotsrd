import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("drone", "ubicaciones", "en");

export default function Page() {
  return <NetworkPage niche="drone" type="ubicaciones" locale="en" />;
}
