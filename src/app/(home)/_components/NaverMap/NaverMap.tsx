import { useRef } from 'react';
import Script from 'next/script';
import s from './NaverMap.module.css';

export default function NaverMap() {
  const mapRef = useRef(null);

  const handleScriptLoad = () => {
    if (!window.naver || !mapRef.current) return;

    const mapOptions = {
      center: new window.naver.maps.LatLng(35.1510549, 126.9316838),
      zoom: 16,
    };

    new window.naver.maps.Map(mapRef.current, mapOptions);
  };

  return (
    <>
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NEXT_PUBLIC_NAVER_CLIENT_ID}`}
        onLoad={handleScriptLoad}
      />

      <div ref={mapRef} className={s.NaverMap} />
    </>
  );
}
