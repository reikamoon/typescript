export type CODON_TYPE = { [key: string]: string; };

export const CODONS_LIST: CODON_TYPE = {
  "AUG": "Methionine",
  "UUU": "Phenylalanine",
  "UUC": "Phenylalanine",
  "UUA": "Leucine",
  "UUG": "Leucine",
  "UCU": "Serine",
  "UCC": "Serine",
  "UCA": "Serine",
  "UCG": "Serine",
  "UAU": "Tyrosine",
  "UAC": "Tyrosine",
  "UGU": "Cysteine",
  "UGC": "Cysteine",
  "UGG": "Tryptophan",
  "UAA": "STOP",
  "UAG": "STOP",
  "UGA": "STOP",
}

class ProteinTranslation {
  static proteins = (sequence: string): string[] => {
    const proteins = [];
    const codons = sequence.match(/\w{3}/g) as [];
    for (let index = 0; index < codons.length; index++) {
      const protein = CODONS_LIST[codons[index]];
      if (protein === "STOP") break;
      proteins.push(protein);
    }
    return proteins;
  }
}

export default ProteinTranslation;