import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("drone", "precios", "en");

export default function Page() {
  return <NetworkPage niche="drone" type="precios" locale="en" />;
}
