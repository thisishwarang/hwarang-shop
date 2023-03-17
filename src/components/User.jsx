import React from 'react';

export default function User({user: {photoURL, displayName}}) {
    return (
        <div className='flex items-center shrink-0'>
            {/* 위에서 shrink-0을 준 이유는 화면크기가 작아졌을때 이미지가 같이 작아져서 이를 고정시키기 위해 */}
            <img className='w-10 h-10 rounded-full mr-2' src={photoURL} alt={displayName} />
            <span className='hidden md:block'>{displayName}</span>
             {/* 위 css의 뜻 : 기본은 hidden, md사이즈 부터 block 형태로 보임 */}
        </div>

    );
}

