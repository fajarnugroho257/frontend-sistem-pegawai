import { useEffect, useState, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { postAbsen } from "../api/auth";
import Swal from "sweetalert2";

const QRScanner = () => {
    const [scanResult, setScanResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const scannerRef = useRef<Html5Qrcode | null>(null);

    const [rescan, setRescan] = useState<boolean>(false);

    const handleReScan = () => {
        setRescan(!rescan);
    }

    useEffect(() => {
        let isMounted = true;

        const startScanner = async () => {
            if (scannerRef.current) return; // **Mencegah scanner ganda**

            scannerRef.current = new Html5Qrcode("reader");

            try {
                await scannerRef.current.start(
                    { facingMode: { exact: "environment" } }, // Kamera belakang
                    { fps: 10, qrbox: { width: 250, height: 250 }, disableFlip: true },
                    (decodedText) => {
                        if (!isMounted) return;
                        setScanResult(decodedText);
                        postData(decodedText);
                        stopScanner();
                    },
                    (error) => console.warn("Scan error:", error)
                );
                setError(null);
            } catch (err) {
                console.warn("FacingMode gagal, fallback ke daftar kamera...");

                // Coba deteksi kamera secara manual
                const devices = await Html5Qrcode.getCameras();
                if (!isMounted || devices.length === 0) {
                    setError("Tidak ada kamera yang tersedia.");
                    return;
                }

                const backCamera = devices.find((device) =>
                    device.label.toLowerCase().includes("back")
                );
                const cameraId = backCamera ? backCamera.id : devices[0].id;

                await scannerRef.current.start(
                    cameraId,
                    { fps: 10, qrbox: { width: 250, height: 250 }, disableFlip: true },
                    (decodedText) => {
                        if (!isMounted) return;
                        setScanResult(decodedText);
                        postData(decodedText);
                        stopScanner();
                    },
                    (error) => console.warn("Scan error:", error)
                );

                setError(null);
            }
        };

        const stopScanner = async () => {
            if (scannerRef.current) {
                try {
                    await scannerRef.current.stop();
                } catch (err) {
                    console.warn("Error stopping scanner:", err);
                }
                scannerRef.current = null;
            }
        };

        startScanner();

        return () => {
            isMounted = false;
            stopScanner();
        };
    }, [rescan]);

    const postData = async (data: string) => {
        try {
            const response = await postAbsen({ dataImage: data });
            console.log(response.success);
            if (response.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Berhasil melakukan absen",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: "400px",
                    heightAuto:true
                });
            }
        } catch (err) {
            console.error("Error sending data:", err);
        }
    };

    return (
        <div>
            <h2>Scan QR Code</h2>
            <div id="reader"></div>
            {scanResult && <p>Hasil: {scanResult}</p>}
            {scanResult && <button onClick={() => handleReScan()} className="bg-blue-600 px-2 py-1 rounded-md text-white">Rescan</button>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default QRScanner;
