class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    merge(pairs: Pair[], l: number, m: number, r: number) {
        const L = pairs.slice(l, m + 1);
        const R = pairs.slice(m + 1, r + 1);

        let i = 0;
        let j = 0;
        let k = l;


        while ((i < L.length) && (j < R.length)) {
            if (L[i].key <= R[j].key) {
                pairs[k] = L[i];
                i++
            } else {
                pairs[k] = R[j];
                j++
            }
            k++;
        }

        while (i < L.length) {
            pairs[k] = L[i];
            i++;
            k++;
        }

        while (j < R.length) {
            pairs[k] = R[j];
            j++;
            k++;
        }

    }

    mergeSortHelper(pairs: Pair[], l: number, r: number) {
        if (r - l + 1 <= 1) return pairs;

        const m = Math.floor((l + r) / 2);

        this.mergeSortHelper(pairs, l, m);
        this.mergeSortHelper(pairs, m + 1, r);
        this.merge(pairs, l, m, r);
        return pairs;
    }


    mergeSort(pairs: Pair[]): Pair[] {
        this.mergeSortHelper(pairs, 0, pairs.length - 1);
        return pairs;
    }
}