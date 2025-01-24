import { Connection, clusterApiUrl } from "@solana/web3.js";
import { CobaltX } from "../src/index";

async function init() {
  const cobaltx = await CobaltX.load({
    connection: new Connection(clusterApiUrl("mainnet-beta")),
    disableFeatureCheck: true,
    disableLoadToken: true,
  });
}

init();
