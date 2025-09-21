/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
    let rightP = nums1.length - 1
    let nums1P = m - 1
    let nums2P = n - 1

    while (rightP >= 0) {
        if (nums1P < 0) {
            nums1[rightP] = nums2[nums2P]
            nums2P--
        } else if (nums2P < 0) {
            nums1[rightP] = nums1[nums1P]
            nums1P--
        } else if (nums2[nums2P] > nums1[nums1P]) {
            nums1[rightP] = nums2[nums2P]
            nums2P--
        } else {
            nums1[rightP] = nums1[nums1P]
            nums1P--
        }

        rightP--
    }
}