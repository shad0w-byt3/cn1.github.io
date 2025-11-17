-- Admin User Setup Instructions
-- ================================
-- 
-- To create the admin account:
-- 1. Visit /signup in your application
-- 2. Use the pre-filled credentials:
--    Email: hero.cn1@gmail.com
--    Password: Ascad03$
-- 3. Click "Create Admin Account"
-- 4. Check your email for confirmation (if email confirmation is enabled)
-- 5. Login at /login with the same credentials
--
-- The signup process will automatically:
-- - Create the auth user in Supabase
-- - Create a profile with admin role
-- - Grant admin access to the dashboard
--
-- If you need to manually set admin role for an existing user:

UPDATE profiles 
SET role = 'admin' 
WHERE email = 'hero.cn1@gmail.com';

-- Note: Make sure the user has signed up first before running the UPDATE query
