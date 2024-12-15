import { toast } from "@/components/ui/use-toast";
import { getConnection } from "@/lib/wallet/connector";
import { ConnectionType } from "@/lib/wallet/supported-connectors";
import { Connector } from "@web3-react/types";
import { useRouter } from "next/navigation";


export default function useDisconnectFromWallet() {
  const router = useRouter()

  const tryDeactivateConnector = async (connector: Connector): Promise<null | undefined> => {
    connector.deactivate?.()
    connector.resetState()
    return null
  }

  const disconnectWallet = async (): Promise<null | undefined> => {
    try {
      const connectionType = (window?.localStorage?.getItem("ConnectionType")) as keyof typeof ConnectionType
      const deactivation = await tryDeactivateConnector(getConnection(ConnectionType[connectionType]).connector);

      if (deactivation === undefined) return
      
      window?.localStorage?.removeItem('ConnectionType')
      router.push("/")
      return;
    } catch (disconnectWalletError) {
      toast({ variant: "error", description: "An error occured trying to disconnect wallet. Try again" })
      console.log(disconnectWalletError);
    }
  }

  return disconnectWallet
}