'use client';

import type React from 'react';
import { useEffect, useState } from 'react';

type LoadingScreenProps = {
    autoHideMs?: number;
};

export default function LoadingScreen({ autoHideMs = 4500 }: LoadingScreenProps): React.ReactElement {
    const [hide, setHide] = useState<boolean>(false);

    // auto fade after hydration
    useEffect(() => {
        if (autoHideMs === undefined) return;

        const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
            setHide(true);
        }, autoHideMs);

        return () => clearTimeout(timer);
    }, [autoHideMs]);

    return (
        <>
            <style jsx global>{`

                @keyframes rotateRing {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes ringDash {
                    0% { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: -260; }
                }

                @keyframes ringPulse {
                    0%, 100% { opacity: .85; filter: drop-shadow(0 12px 26px rgba(59,130,246,.25)); }
                    50% { opacity: 1; filter: drop-shadow(0 14px 32px rgba(59,130,246,.38)); }
                }

                @keyframes whiteningMove {
                    0%   { transform: translateX(-260px); opacity: 1; }
                    55%  { transform: translateX(0px); opacity: 1; }
                    92%  { transform: translateX(0px); opacity: 1; }
                    96%  { transform: translateX(0px); opacity: 0; }
                    100% { transform: translateX(-260px); opacity: 0; }
                }

                @keyframes sparkleTravel {
                    0%   { transform: translateY(120px) scale(0.6) rotate(0deg); opacity: 0; }
                    15%  { opacity: 1; }
                    70%  { opacity: 1; }
                    100% { transform: translateY(-130px) scale(1.05) rotate(240deg); opacity: 0; }
                }

                @keyframes sparkle {
                    0% { opacity: 0; transform: scale(0.4) rotate(0deg);}
                    50% { opacity: 1; transform: scale(1.2) rotate(180deg);}
                    100% { opacity: 0; transform: scale(0.4) rotate(360deg);}
                }

                .loading-screen {
                    position: fixed;
                    inset: 0;
                    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    transition: opacity .6s ease, visibility .6s ease;
                }

                .loading-screen.hide {
                    opacity: 0;
                    visibility: hidden;
                }

                .loader-container {
                    position: relative;
                    width: 360px;
                    height: 360px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 40px;
                }

                /* rotating ring */

                .rotating-ring {
                    position: absolute;
                    width: 340px;
                    height: 340px;
                    animation: rotateRing 3.0s linear infinite;
                }

                .ring-circle-base {
                    fill: none;
                    stroke: url(#ringGradient);
                    stroke-width: 6;
                    stroke-linecap: round;
                    opacity: .22;
                }

                .ring-circle-animated {
                    fill: none;
                    stroke: url(#ringGradient);
                    stroke-width: 7;
                    stroke-linecap: round;
                    stroke-dasharray: 44 18;
                    animation: ringDash 1.0s linear infinite, ringPulse 1.5s ease-in-out infinite;
                }

                /* tooth */

                .tooth-svg {
                    width: 200px;
                    height: 200px;
                    filter: drop-shadow(0 10px 20px rgba(59,130,246,.25));
                    position: relative;
                    z-index: 10;
                }

                .whitening-fill {
                    animation: whiteningMove 6.8s ease-in-out infinite;
                }

                /* sparkle */

                .sparkle {
                    position: absolute;
                    width: 18px;
                    height: 18px;
                    background: radial-gradient(circle, white 40%, rgba(255,255,255,0) 70%);
                    border-radius: 50%;
                    pointer-events: none;
                    filter: drop-shadow(0 8px 16px rgba(96,165,250,.45));
                }

                .sparkle-1 {
                    right: 86px;
                    top: 210px;
                    animation: sparkleTravel 2.3s infinite ease-in-out;
                }

                .sparkle-2 {
                    left: 92px;
                    top: 225px;
                    width: 14px;
                    height: 14px;
                    animation: sparkleTravel 2.3s infinite ease-in-out;
                    animation-delay: .35s;
                }

                .sparkle-3 {
                    right: 120px;
                    top: 240px;
                    width: 10px;
                    height: 10px;
                    animation: sparkleTravel 2.3s infinite ease-in-out;
                    animation-delay: .7s;
                }

                /* text */

                .loading-text {
                    font-size: 30px;
                    font-weight: 800;
                    background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    letter-spacing: .5px;
                    margin-bottom: 10px;
                }

                .loading-subtext {
                    font-size: 14px;
                    color: #64748b;
                    text-align: center;
                    max-width: 400px;
                    line-height: 1.6;
                }

            `}</style>

            <div className={`loading-screen ${hide ? 'hide' : ''}`}>
                <div className="loader-container">

                    {/* Rotating ring */}
                    <svg className="rotating-ring" viewBox="0 0 340 340">
                        <defs>
                            <linearGradient id="ringGradient" x1="0%" y1="50%" x2="100%" y2="50%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="50%" stopColor="#60a5fa" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                        </defs>
                        <circle cx="170" cy="170" r="160" className="ring-circle-base" />
                        <circle cx="170" cy="170" r="160" className="ring-circle-animated" />
                    </svg>

                    {/* Tooth whitening animation */}
                    <svg className="tooth-svg" viewBox="0 0 200 200">

                        <defs>
                            <mask id="toothMask">
                                <rect width="100%" height="100%" fill="black"/>
                                <path
                                    d="M137 190c-12 0-17-49-17-51-1-13-10-21-16-22-6 0-14 9-16 22 0 2-5 51-17 51s-18-44-19-44c-2-14 1-34 2-40-4-12-18-56-5-70 5-4 11-6 19-6 6 0 13 1 20 3 6 1 11 2 16 2s10-1 16-2c7-2 14-3 20-3 8 0 14 2 18 7 13 14-1 58-5 70 1 5 4 25 2 39 1 0-5 44-18 44z"
                                    fill="white"
                                />
                            </mask>

                            <linearGradient id="whiteningGradient" x1="0" y1="0.5" x2="1" y2="0.5">
                                <stop offset="0%" stopColor="#f59e0b"/>
                                <stop offset="40%" stopColor="#fde047"/>
                                <stop offset="70%" stopColor="#fef9c3"/>
                                <stop offset="100%" stopColor="#ffffff"/>
                            </linearGradient>
                        </defs>

                        <g mask="url(#toothMask)">
                            <rect x="0" y="0" width="200" height="200" fill="#fde68a" />
                            <rect className="whitening-fill" x="-260" y="0" width="520" height="200" fill="url(#whiteningGradient)"/>
                        </g>

                        <path
                            d="M137 190c-12 0-17-49-17-51-1-13-10-21-16-22-6 0-14 9-16 22 0 2-5 51-17 51s-18-44-19-44c-2-14 1-34 2-40-4-12-18-56-5-70 5-4 11-6 19-6 6 0 13 1 20 3 6 1 11 2 16 2s10-1 16-2c7-2 14-3 20-3 8 0 14 2 18 7 13 14-1 58-5 70 1 5 4 25 2 39 1 0-5 44-18 44z"
                            fill="none"
                            stroke="#cbd5f5"
                            strokeWidth="3"
                        />

                    </svg>

                    <div className="sparkle sparkle-1"></div>
                    <div className="sparkle sparkle-2"></div>
                    <div className="sparkle sparkle-3"></div>

                </div>

                <div className="loading-text">Whitening Your Smile</div>
                <div className="loading-subtext">
                    Preparing your dental experience with a brighter, healthier smile.
                </div>
            </div>
        </>
    );
}