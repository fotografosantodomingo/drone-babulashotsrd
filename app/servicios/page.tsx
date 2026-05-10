import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("drone", "servicios", "es");

export default function Page() {
  return <NetworkPage niche="drone" type="servicios" locale="es" />;
}
