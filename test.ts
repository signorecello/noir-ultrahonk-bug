import {
	CompiledCircuit,
	UltraHonkBackend,
} from "@noir-lang/backend_barretenberg";
import { Noir } from "@noir-lang/noir_js";
import { readFileSync } from "fs";
import { resolve } from "path";

const circuitFile = JSON.parse(
	readFileSync(resolve("target/snippets.json"), "utf-8")
);

const circuit = circuitFile as CompiledCircuit;

const backend = new UltraHonkBackend(circuit);
const noir = new Noir(circuit);

const input = { x: 1, y: 2 };
const { witness } = await noir.execute(input);
const correctProof = await backend.generateProof(witness);
