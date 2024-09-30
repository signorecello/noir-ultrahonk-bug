# Noir >< UltraHonk

This repo helps in reproducing a bug when using Noir and UltraHonk.

## Steps

1. Install `npm`, `yarn`, or `bun` or whatever (using `bun` here)
2. Install Noir v.0.34.0 and BB 0.55.0 (you can run `npx noirenberg -n`)
3. Double-check the dependencies in `package.json` match
4. Compile with `nargo compile`
5. Run `npx tsx test.ts`

## Expected output

Some proof

## Actual output

```bash!
Error [RuntimeError]: unreachable
    at abort (wasm://wasm/0857762a:wasm-function[19384]:0xb6e3f7)
    at abort_with_message(std::__2::basic_string<char, std::__2::char_traits<char>, std::__2::allocator<char>> const&) (wasm://wasm/0857762a:wasm-function[194]:0x392b8)
    at throw_or_abort(std::__2::basic_string<char, std::__2::char_traits<char>, std::__2::allocator<char>> const&) (wasm://wasm/0857762a:wasm-function[193]:0x3927a)
    at bb::srs::factories::MemBn254CrsFactory::get_prover_crs(unsigned long) (wasm://wasm/0857762a:wasm-function[10439]:0x7b8286)
    at bb::CommitmentKey<bb::curve::BN254>::CommitmentKey(unsigned long) (wasm://wasm/0857762a:wasm-function[622]:0x4b0b5)
    at bb::CommitmentKey<bb::curve::BN254>* std::__2::construct_at[abi:v160000]<bb::CommitmentKey<bb::curve::BN254>, unsigned long const&, bb::CommitmentKey<bb::curve::BN254>*>(bb::CommitmentKey<bb::curve::BN254>*, unsigned long const&) (wasm://wasm/0857762a:wasm-function[616]:0x4b00b)
    at std::__2::__shared_ptr_emplace<bb::CommitmentKey<bb::curve::BN254>, std::__2::allocator<bb::CommitmentKey<bb::curve::BN254>>>::__shared_ptr_emplace[abi:v160000]<unsigned long const&>(std::__2::allocator<bb::CommitmentKey<bb::curve::BN254>>, unsigned long const&) (wasm://wasm/0857762a:wasm-function[613]:0x4afba)
    at std::__2::shared_ptr<bb::CommitmentKey<bb::curve::BN254>> std::__2::allocate_shared[abi:v160000]<bb::CommitmentKey<bb::curve::BN254>, std::__2::allocator<bb::CommitmentKey<bb::curve::BN254>>, unsigned long const&, void>(std::__2::allocator<bb::CommitmentKey<bb::curve::BN254>> const&, unsigned long const&) (wasm://wasm/0857762a:wasm-function[611]:0x4af4b)
    at std::__2::shared_ptr<bb::CommitmentKey<bb::curve::BN254>> std::__2::make_shared[abi:v160000]<bb::CommitmentKey<bb::curve::BN254>, unsigned long const&, void>(unsigned long const&) (wasm://wasm/0857762a:wasm-function[604]:0x4aa95)
    at bb::ProvingKey_<bb::field<bb::Bn254FrParams>, bb::CommitmentKey<bb::curve::BN254>>::ProvingKey_(unsigned long, unsigned long, std::__2::shared_ptr<bb::CommitmentKey<bb::curve::BN254>>) (wasm://wasm/0857762a:wasm-function[551]:0x47371)
```
