import { Router } from "express";
import token from "../lib/token.js";

const router = Router();

const users = [
    {
        id: 1,
        username: "user1",
        access: ["Read", "Create"],
    },
    {
        id: 2,
        username: "user2",
        access: ["Read", "Change", "Delete"],
    },
    {
        id: 3,
        username: "user3",
        access: ["Create"],
    },
    {
        id: 4,
        username: "user4",
        access: ["Read", "Create", "Change"],
    },
];

router.post("/login", (req, res, next) => {
    const user = users.find((user) => user.username === req.body.username);
    if (!user) return res.status(401).end();

    const userToken = token.signToken({ id: user.id, access: user.access });
    res.json(userToken);
});

export default router;

// post request with auth/login/ erst dann wird autherised, danach erst protected router machen
