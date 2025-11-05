-- Fix recursive RLS policies on user_roles table
-- Replace EXISTS queries with has_role() function to prevent infinite recursion

DROP POLICY "Admins can insert roles" ON public.user_roles;
DROP POLICY "Admins can update roles" ON public.user_roles;
DROP POLICY "Admins can delete roles" ON public.user_roles;

CREATE POLICY "Admins can insert roles" ON public.user_roles
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update roles" ON public.user_roles
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete roles" ON public.user_roles
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));