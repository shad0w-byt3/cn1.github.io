-- Insert sample projects
INSERT INTO projects (title, slug, description, image, tags, github_url, featured, order_index) VALUES
('Network Penetration Testing Framework', 'network-pentest-framework', 'Custom Python framework for automated network vulnerability assessment and exploitation. Includes modules for reconnaissance, scanning, and post-exploitation.', '/placeholder.svg?height=400&width=600', ARRAY['Python', 'Networking', 'Security'], 'https://github.com/batman', true, 1),
('Web Application Security Scanner', 'web-app-scanner', 'Advanced web application security scanner built with Python. Detects SQL injection, XSS, CSRF, and other OWASP Top 10 vulnerabilities.', '/placeholder.svg?height=400&width=600', ARRAY['Python', 'Web Security', 'OWASP'], 'https://github.com/batman', true, 2),
('Wireless Security Audit Tool', 'wireless-audit-tool', 'Comprehensive wireless network security auditing tool. Supports WPA/WPA2 cracking, rogue AP detection, and packet analysis.', '/placeholder.svg?height=400&width=600', ARRAY['Python', 'Wireless', 'Kali Linux'], 'https://github.com/batman', true, 3),
('Exploit Development Kit', 'exploit-dev-kit', 'Collection of tools and scripts for exploit development and reverse engineering. Includes buffer overflow exploits and shellcode generators.', '/placeholder.svg?height=400&width=600', ARRAY['C', 'Assembly', 'Exploit Dev'], 'https://github.com/batman', false, 4),
('Social Engineering Toolkit', 'social-engineering-toolkit', 'Advanced social engineering framework for security awareness training and penetration testing engagements.', '/placeholder.svg?height=400&width=600', ARRAY['Python', 'Social Engineering'], 'https://github.com/batman', false, 5),
('Malware Analysis Lab', 'malware-analysis-lab', 'Automated malware analysis environment with sandboxing, behavioral analysis, and threat intelligence integration.', '/placeholder.svg?height=400&width=600', ARRAY['Python', 'Malware Analysis', 'Docker'], 'https://github.com/batman', false, 6);

-- Insert sample blog posts
INSERT INTO blogs (title, slug, content, excerpt, cover_image, tags, published, created_at) VALUES
('Advanced SQL Injection Techniques in 2024', 'advanced-sql-injection-2024', 
'# Advanced SQL Injection Techniques in 2024

SQL injection remains one of the most critical web application vulnerabilities. In this post, we''ll explore advanced techniques that bypass modern WAFs and security controls.

## Understanding Modern Defenses

Modern web applications implement various security measures including:
- Web Application Firewalls (WAFs)
- Prepared statements
- Input validation
- Output encoding

## Bypassing WAF Rules

Here are some advanced techniques...', 
'Exploring cutting-edge SQL injection techniques that bypass modern security controls and WAFs.',
'/placeholder.svg?height=400&width=800',
ARRAY['Web Security', 'SQL Injection', 'Penetration Testing'],
true,
NOW() - INTERVAL '7 days'),

('Building a Custom Exploit for Buffer Overflow', 'custom-buffer-overflow-exploit',
'# Building a Custom Exploit for Buffer Overflow

Buffer overflow vulnerabilities are fundamental to understanding memory corruption attacks. Let''s build a custom exploit from scratch.

## Understanding the Vulnerability

A buffer overflow occurs when...', 
'Step-by-step guide to developing a custom buffer overflow exploit with shellcode injection.',
'/placeholder.svg?height=400&width=800',
ARRAY['Exploit Development', 'Binary Exploitation', 'Assembly'],
true,
NOW() - INTERVAL '14 days'),

('Wireless Network Penetration Testing Guide', 'wireless-pentest-guide',
'# Wireless Network Penetration Testing Guide

Comprehensive guide to wireless network security testing, from reconnaissance to post-exploitation.

## Tools You''ll Need

- Aircrack-ng suite
- Wireshark
- Kismet
- Reaver

## Methodology...', 
'Complete guide to wireless network penetration testing including WPA2 cracking and rogue AP attacks.',
'/placeholder.svg?height=400&width=800',
ARRAY['Wireless Security', 'Penetration Testing', 'Kali Linux'],
true,
NOW() - INTERVAL '21 days');
