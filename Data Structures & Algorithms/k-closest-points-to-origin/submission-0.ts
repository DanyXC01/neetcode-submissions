class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const distances: number[][] = [];
        const result = [];
        const targetPoint = [0, 0];


        for (const point of points) {
            const [x, y] = point;
            const xPower = Math.pow(x - targetPoint[0], 2);
            const yPower = Math.pow(y - targetPoint[1], 2);

            const distance = Math.sqrt(xPower + yPower);

            distances.push([distance, x, y]);
        }

        distances.sort((a, b) => a[0] - b[0]);

        for (let i = 0; i < k; i++) {
            result.push([distances[i][1], distances[i][2]])
        }

        return result;
    }
}
