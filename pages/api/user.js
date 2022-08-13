import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(
    function userRoute(req, res) {
        const session = getSession(req, res);
        if (session) {
            res.status(200).json({
                message: "User route",
                user: session.user,
            });
        } else {
            res.status(401).json({
                message: "Unauthorized",
            });
        }
    }
);