class Codec {
public:

    // Encodes a list of strings to a single string.
    string encode(vector<string>& strs) {
        string e = "";
        for (auto &s : strs) {
            e += s + "∀";
        }
        return e;
    }

    // Decodes a single string to a list of strings.
    vector<string> decode(string s) {
        vector<string> v;
        string token;
        int pos;
        while ((pos = s.find("∀")) != std::string::npos) {
            token = s.substr(0, pos);
            v.push_back(token);
            s.erase(0, pos + strlen("∀"));
        }
        return v;
    }
};

// Your Codec object will be instantiated and called as such:
// Codec codec;
// codec.decode(codec.encode(strs));