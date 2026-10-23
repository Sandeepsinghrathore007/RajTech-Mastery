var e=[{id:`we-01`,title:`Decimal to 8421 BCD vs Pure Binary Representation Comparison`,problemStatement:`Ek decimal number 385_10 diya gaya hai. (A) Number 385_10 ko standard 8421 BCD (Binary Coded Decimal) format mein convert karo, (B) Number 385_10 ko standard Pure Binary representation mein convert karo, aur (C) Dono encodings ki required bit-length aur storage efficiency compare karo.`,input:`Decimal Number N = 385_10`,difficulty:`Foundational`,concept:`BCD Digit-by-Digit Encoding vs Pure Positional Binary Encoding`,steps:[{stepNumber:1,action:`8421 BCD representation evaluate karo`,detail:`BCD mein har individual decimal digit ko independently 4-bit binary nibble ke roop mein encode kiya jata hai:
Digit 3 -> 0011_2
Digit 8 -> 1000_2
Digit 5 -> 0101_2
Assembled 8421 BCD = 0011 1000 0101_BCD. Total Bits = 3 digits × 4 bits/digit = 12 bits.`},{stepNumber:2,action:`Pure binary representation calculate karo`,detail:`Successive division by 2 ya powers of 2 decomposition method use karo:
385 = 256 + 128 + 1 = 2^8 + 2^7 + 2^0.
Bit 8 (256): 1
Bit 7 (128): 1
Bit 6 (64): 0
Bit 5 (32): 0
Bit 4 (16): 0
Bit 3 (8): 0
Bit 2 (4): 0
Bit 1 (2): 0
Bit 0 (1): 1
Pure Binary = 110000001_2. Total Bits = 9 bits.`},{stepNumber:3,action:`Storage efficiency aur hardware trade-off compare karo`,detail:`Pure binary ko store karne ke liye 9 bits chahiye, jabki BCD ko 12 bits chahiye (3 extra bits, ~33% storage penalty). Lekin BCD ka advantage yeh hai ki decimal seven-segment displays (digital meters, cash registers) par direct decoding bina complex binary division ke ho jati hai.`}],output:`8421 BCD Code: 0011 1000 0101_BCD (12 bits); Pure Binary: 110000001_2 (9 bits); BCD has 33% higher bit overhead.`,verification:`0011=3, 1000=8, 0101=5 matches 385_BCD. 256 + 128 + 1 = 385 matches pure binary.`},{id:`we-02`,title:`BCD Addition with +6 (0110_2) Invalid State Correction`,problemStatement:`Do single decimal digits ko unke 8421 BCD format mein add karo: 6_10 (0110_BCD) + 7_10 (0111_BCD). Demonstrate karo ki binary adder ka raw sum invalid BCD state kyun banta hai, +6 correction rule apply karo, aur final 2-digit BCD result verify karo.`,input:`Operand 1 = 6_10 = 0110_BCD; Operand 2 = 7_10 = 0111_BCD`,difficulty:`Intermediate`,concept:`BCD Addition Invalid State Detection & 0110_2 Correction Rule`,steps:[{stepNumber:1,action:`Standard 4-bit binary addition perform karo`,detail:`    0 1 1 0  (6_BCD)
  + 0 1 1 1  (7_BCD)
  ---------
    1 1 0 1  (Raw Binary Sum = 13_10)`},{stepNumber:2,action:`BCD validity check evaluate karo`,detail:`Raw sum 1101_2 ki decimal value 13 hai. Valid BCD range 0000 se 1001 (0 to 9) hoti hai. Kyunki 13 > 9 hai (sum falls in the 6 forbidden states: 1010 to 1111), yeh sum INVALID BCD hai!`},{stepNumber:3,action:`+6 (0110_2) correction factor add karo`,detail:`Invalid sum ko correct karne ke liye usme 6_10 (0110_2) add kiya jata hai:
    1 1 0 1  (13_10)
  + 0 1 1 0  (+6 correction)
  ---------
  1 0 0 1 1`},{stepNumber:4,action:`2-digit BCD format mein assemble karo`,detail:`Sum se 5th bit Carry-Out = 1 generate hui jo agle tens digit BCD nibble ka part banti hai:
Tens Nibble: 0001_BCD (1_10)
Units Nibble: 0011_BCD (3_10)
Final BCD = 0001 0011_BCD (Decimal 13). Check: 6 + 7 = 13.`}],output:`Raw Binary Sum: 1101_2 (Invalid BCD); Corrected BCD: 0001 0011_BCD; Decimal Equivalent: 13.`,verification:`6 + 7 = 13. Corrected BCD nibbles 0001 and 0011 represent digits 1 and 3. +6 correction validated.`},{id:`we-03`,title:`Binary to Gray Code & Gray to Binary Full Cycle Conversion`,problemStatement:`Ek 6-bit binary number diya gaya hai: B = 110101_2. (A) Adjacent bit XOR algorithm ka use karke is binary number ko Gray Code mein convert karo. (B) Prapt huye Gray code ko diagonal XOR algorithm se wapas Binary mein convert karke verify karo ki original number accurately recover hota hai.`,input:`Binary Number B = 110101_2 (B5 B4 B3 B2 B1 B0)`,difficulty:`Intermediate`,concept:`Binary-to-Gray Adjacent XOR vs Gray-to-Binary Diagonal XOR Mechanics`,steps:[{stepNumber:1,action:`Binary to Gray Code: MSB rule apply karo`,detail:`Gray code ka MSB hamesha binary MSB ke identical hota hai: G5 = B5 = 1.`},{stepNumber:2,action:`Binary to Gray Code: Successive adjacent bits ka XOR evaluate karo`,detail:`Formula: G_i = B_(i+1) ⊕ B_i
G4 = B5 ⊕ B4 = 1 ⊕ 1 = 0
G3 = B4 ⊕ B3 = 1 ⊕ 0 = 1
G2 = B3 ⊕ B2 = 0 ⊕ 1 = 1
G1 = B2 ⊕ B1 = 1 ⊕ 0 = 1
G0 = B1 ⊕ B0 = 0 ⊕ 1 = 1
Assembled Gray Code = 101111_Gray.`},{stepNumber:3,action:`Gray to Binary: MSB rule apply karo`,detail:`Binary MSB Gray MSB ke identical hota hai: B5 = G5 = 1.`},{stepNumber:4,action:`Gray to Binary: Diagonal XOR evaluate karo`,detail:`Formula: B_i = B_(i+1) ⊕ G_i
B4 = B5 ⊕ G4 = 1 ⊕ 0 = 1
B3 = B4 ⊕ G3 = 1 ⊕ 1 = 0
B2 = B3 ⊕ G2 = 0 ⊕ 1 = 1
B1 = B2 ⊕ G1 = 1 ⊕ 1 = 0
B0 = B1 ⊕ G0 = 0 ⊕ 1 = 1
Recovered Binary = 110101_2.`}],output:`Binary to Gray: 110101_2 -> 101111_Gray; Gray to Binary: 101111_Gray -> 110101_2; Exact Full-Cycle Recovery Verified.`,verification:`Original binary 110101 matches recovered binary 110101 bit-for-bit.`},{id:`we-04`,title:`Excess-3 (XS-3) Self-Complementing Property Verification`,problemStatement:`Decimal digit 4_10 aur uske 9's complement (9 - 4 = 5_10) ke liye: (A) Dono digits ka Excess-3 code calculate karo, aur (B) Mathematically prove karo ki digit 4 ka Excess-3 code aur digit 5 ka Excess-3 code ek dusre ke exact 1's complement (bitwise inversion) hain.`,input:`Digit 1 = 4_10; 9's Complement of 4 = 5_10`,difficulty:`Foundational`,concept:`Excess-3 Self-Complementing (Reflective) Mathematical Principle`,steps:[{stepNumber:1,action:`Digit 4 ka Excess-3 code calculate karo`,detail:`Formula: XS3 = BCD + 3 (0011_2).
4 in BCD = 0100_2.
XS3(4) = 0100 + 0011 = 0111_XS3 (Decimal 7).`},{stepNumber:2,action:`Digit 5 ka Excess-3 code calculate karo`,detail:`5 in BCD = 0101_2.
XS3(5) = 0101 + 0011 = 1000_XS3 (Decimal 8).`},{stepNumber:3,action:`Bitwise inversion test karo`,detail:`XS3(4) = 0 1 1 1
Invert all bits (1's complement of 0111):
Bit 3: 0 -> 1
Bit 2: 1 -> 0
Bit 1: 1 -> 0
Bit 0: 1 -> 0
Inverted Pattern = 1000_2.`},{stepNumber:4,action:`Self-complementing property conclude karo`,detail:`Inverted pattern 1000_2 theek digit 5 ka Excess-3 code hai! Kyunki digit 5 decimal digit 4 ka 9's complement hai, isse prove hota hai ki XS-3 code self-complementing hai.`}],output:`XS3(4) = 0111; XS3(5) = 1000; Bitwise Inversion of 0111 yields 1000, rigorously proving the self-complementing theorem.`,verification:`NOT(0111) = 1000. 4 and 5 sum to 9. Excess-3 self-complementing property verified.`},{id:`we-05`,title:`ASCII Case Conversion & Even/Odd Parity Bit Generation`,problemStatement:`Uppercase character 'E' ka standard 7-bit ASCII code 69_10 (1000101_2) hai. (A) Bit 5 manipulation (+32 offset rule) ka use karke lowercase character 'e' ka 7-bit ASCII code derive karo, aur (B) Dono characters 'E' aur 'e' ke liye Most Significant Bit position par Even Parity bit aur Odd Parity bit generate karo.`,input:`Character 'E': Decimal ASCII = 69_10; 7-bit Binary = 1000101_2 (b6 b5 b4 b3 b2 b1 b0)`,difficulty:`Intermediate`,concept:`ASCII Case Bit 5 Manipulation & Parity Bit Error Detection Encoding`,steps:[{stepNumber:1,action:`Lowercase 'e' ka ASCII code derive karo`,detail:`Case difference rule: 'e' = 'E' + 32_10 = 69 + 32 = 101_10.
Binary representation:
'E' = 1 0 0 0 1 0 1_2 (Bit 5 = 0)
Set Bit 5 to 1 (add 32):
'e' = 1 1 0 0 1 0 1_2 (Decimal 64 + 32 + 4 + 1 = 101).`},{stepNumber:2,action:`Character 'E' (1000101) ke liye Parity bits generate karo`,detail:`Data bits mein 1s ka count: 1 + 0 + 0 + 0 + 1 + 0 + 1 = 3 ones (ODD count).
Even Parity: Total 1s even banane ke liye parity bit = 1 lagana hoga -> Transmitted Byte = 1 1000101 (char 1s).
Odd Parity: Total 1s already odd hain, to parity bit = 0 lagana hoga -> Transmitted Byte = 0 1000101 (teen 1s).`},{stepNumber:3,action:`Character 'e' (1100101) ke liye Parity bits generate karo`,detail:`Data bits mein 1s ka count: 1 + 1 + 0 + 0 + 1 + 0 + 1 = 4 ones (EVEN count).
Even Parity: Total 1s already even hain, to parity bit = 0 lagana hoga -> Transmitted Byte = 0 1100101 (char 1s).
Odd Parity: Total 1s odd banane ke liye parity bit = 1 lagana hoga -> Transmitted Byte = 1 1100101 (paanch 1s).`}],output:`'e' ASCII: 101_10 (1100101_2); 'E' with Even Parity: 11000101_2; 'E' with Odd Parity: 01000101_2; 'e' with Even Parity: 01100101_2; 'e' with Odd Parity: 11100101_2.`,verification:`69 + 32 = 101. Total 1s in Even parity byte is 4 (even); in Odd parity byte is 3 or 5 (odd). Parity encoding verified.`}];export{e as default};