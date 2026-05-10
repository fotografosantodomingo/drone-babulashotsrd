import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("drone", "ubicaciones", "es");

export default function Page() {
  return <NetworkPage niche="drone" type="ubicaciones" locale="es" />;
}
