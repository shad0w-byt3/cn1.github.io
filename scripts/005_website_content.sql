-- Create website_content table for managing all site content
CREATE TABLE IF NOT EXISTS website_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section TEXT UNIQUE NOT NULL,
  content JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE website_content ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Website content is viewable by everyone"
  ON website_content FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can update website content"
  ON website_content FOR UPDATE
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can insert website content"
  ON website_content FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Insert default content
INSERT INTO website_content (section, content) VALUES
('hero', '{
  "title": "BATMAN",
  "subtitle": "Penetration Tester & Security Researcher",
  "description": "Cybersecurity expert specializing in penetration testing, vulnerability assessment, and security research. Breaking systems to make them stronger."
}'::jsonb),
('about', '{
  "title": "About Me",
  "content": "I am a dedicated penetration tester and security researcher with a passion for uncovering vulnerabilities and strengthening digital defenses. My expertise spans across network security, web application testing, and exploit development. I believe in ethical hacking as a force for good, helping organizations identify and fix security weaknesses before malicious actors can exploit them."
}'::jsonb),
('contact', '{
  "email": "hero.cn1@gmail.com",
  "github": "https://github.com/batman",
  "linkedin": "https://linkedin.com/in/batman",
  "twitter": "https://twitter.com/batman"
}'::jsonb),
('skills', '{
  "categories": [
    {
      "name": "Penetration Testing",
      "skills": ["Network Penetration Testing", "Web Application Security", "Mobile App Security", "API Security Testing"]
    },
    {
      "name": "Tools & Frameworks",
      "skills": ["Metasploit", "Burp Suite", "Nmap", "Wireshark", "SQLMap", "John the Ripper"]
    },
    {
      "name": "Programming",
      "skills": ["Python", "Bash", "JavaScript", "PowerShell", "Ruby"]
    },
    {
      "name": "Certifications",
      "skills": ["OSCP", "CEH", "GPEN", "GWAPT"]
    }
  ]
}'::jsonb)
ON CONFLICT (section) DO NOTHING;
