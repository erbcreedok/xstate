const apartmentImages = [
	'https://photos-kr.kcdn.kz/webp/3c/3c8fc1dd-d6ac-4284-8de7-dfd9019bc8f5/1-280x175.webp',
	'https://photos-kr.kcdn.kz/webp/3c/3c8fc1dd-d6ac-4284-8de7-dfd9019bc8f5/2-280x175.webp',
	'https://photos-kr.kcdn.kz/webp/3c/3c8fc1dd-d6ac-4284-8de7-dfd9019bc8f5/3-280x175.webp',
	'https://photos-kr.kcdn.kz/webp/3c/3c8fc1dd-d6ac-4284-8de7-dfd9019bc8f5/4-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/47/47611a9c-606c-4038-9519-3bdb9097b645/1-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/47/47611a9c-606c-4038-9519-3bdb9097b645/2-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/47/47611a9c-606c-4038-9519-3bdb9097b645/3-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/47/47611a9c-606c-4038-9519-3bdb9097b645/4-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/47/47611a9c-606c-4038-9519-3bdb9097b645/5-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/47/47611a9c-606c-4038-9519-3bdb9097b645/6-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/47/47611a9c-606c-4038-9519-3bdb9097b645/7-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/47/47611a9c-606c-4038-9519-3bdb9097b645/8-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/47/47611a9c-606c-4038-9519-3bdb9097b645/9-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/47/47611a9c-606c-4038-9519-3bdb9097b645/10-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/47/47611a9c-606c-4038-9519-3bdb9097b645/11-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/47/47611a9c-606c-4038-9519-3bdb9097b645/12-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/47/47611a9c-606c-4038-9519-3bdb9097b645/13-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/1-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/2-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/3-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/4-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/5-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/6-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/7-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/8-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/9-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/10-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/11-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/12-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/13-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/14-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/15-280x175.webp',
	'https://alakcell-photos-kr.kcdn.kz/webp/5d/5d981624-7cdf-4403-ba89-02e804489eeb/16-280x175.webp',
]

let index = 0
const getIndex = () => {
	const i = index
	index += 1
	index %= apartmentImages.length

	return i
}
export const getApartmentImage = () => {
	return apartmentImages[getIndex()]
}
