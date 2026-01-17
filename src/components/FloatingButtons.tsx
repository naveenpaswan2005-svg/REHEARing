import { motion } from "framer-motion";

export const FloatingButtons = () => {
    const openWhatsApp = () => {
        const message = encodeURIComponent(
            "Hi! I would like to book a free hearing test at REHEARing clinic."
        );
        window.open(`https://wa.me/9899252548?text=${message}`, "_blank");
    };

    return (
        <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            onClick={openWhatsApp}
            className="fixed right-6 bottom-6 z-50 w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 flex items-center justify-center"
            style={{ backgroundColor: "#25D366" }}
            aria-label="Chat on WhatsApp"
        >
            {/* Official WhatsApp Logo - Phone in Chat Bubble */}
            <svg
                viewBox="0 0 32 32"
                className="w-9 h-9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 31c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C7.716 1 1 7.716 1 16c0 2.648.691 5.132 1.903 7.285L1 31l7.715-1.903A14.936 14.936 0 0016 31zm0-2.5c6.904 0 12.5-5.596 12.5-12.5S22.904 3.5 16 3.5 3.5 9.096 3.5 16c0 2.344.646 4.536 1.769 6.41l-1.157 4.478 4.478-1.157A12.444 12.444 0 0016 28.5z"
                    fill="#fff"
                />
                <path
                    d="M22.813 19.556c-.375-.188-2.219-1.094-2.563-1.219-.343-.125-.593-.188-.843.188-.25.375-.969 1.219-1.188 1.469-.219.25-.438.281-.813.094-.375-.188-1.581-.581-3.012-1.856-1.113-.994-1.863-2.219-2.081-2.594-.219-.375-.025-.575.163-.763.169-.168.375-.438.563-.656.188-.219.25-.375.375-.625.125-.25.063-.469-.031-.656-.094-.188-.844-2.031-1.156-2.781-.306-.731-.617-.631-.844-.644-.218-.012-.468-.012-.718-.012-.25 0-.656.094-1 .469-.344.375-1.313 1.281-1.313 3.125 0 1.844 1.344 3.625 1.531 3.875.188.25 2.644 4.038 6.406 5.656.894.388 1.594.619 2.138.794.9.287 1.719.244 2.363.15.719-.107 2.219-.906 2.531-1.781.313-.875.313-1.625.219-1.781-.094-.156-.344-.25-.719-.438z"
                    fill="#fff"
                />
            </svg>

            {/* Pulse animation ring */}
            <span
                className="absolute inset-0 rounded-full animate-ping opacity-30"
                style={{ backgroundColor: "#25D366" }}
            />
        </motion.button>
    );
};
