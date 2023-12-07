const bImg = document.getElementById("m-banner-img");

const m_banner_imgs = [
    `https://images.unsplash.com/photo-1700771266232-7a31af68eb31?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,

    `https://images.unsplash.com/photo-1689020562921-ba28a34c881d?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,

    `https://images.unsplash.com/photo-1701505708176-63194ee8f0e8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,

    `https://plus.unsplash.com/premium_photo-1701127871438-af582cdd8c55?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,

    // ``,

    // ``,
];
let currentIndex = 0;
function updateImg(arr, elem) {
    currentIndex = (currentIndex + 1) % arr.length;
    elem.src = arr[currentIndex];
}
setInterval(() => {
    updateImg(m_banner_imgs, bImg);
}, 5469);

bImg.addEventListener(onmouseover);
